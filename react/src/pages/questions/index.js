import React, { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import Editor from './editor';
import * as actions from "./actions";
import Content from "./content";
import {
  QuesWrapper,
  QuesContent,
  QuesFooter,
  MainQues,
  MainTags,
  Tag,
  MainTittle,
  MainDesc,
  FollowWrap,
  BtnItem,
  Actoins,
  NumItem,
  Extend,
  AnswerWrapper
} from "./style";
import { HomeWrapper, HomeWrap, MainColumn, LeftColumn } from "../home/style";

function QuesPage(props) {
  const [writeStatus, setWriteStatus] = useState(false);
  const getQuestion = useCallback(() => props.handleCompleteQuestion(), [])
  useEffect(() => {
    getQuestion();
  }, [getQuestion]);
  const { id } = useParams();
  console.log(id);
  const ques = props.ques.toJS();
  return (
    <React.Fragment>
      <QuesWrapper>
        <QuesContent>
          <MainQues>
            <MainTags>
              {ques.tag.map(val => (
                <Tag key={val.toString()}>{val}</Tag>
              ))}
            </MainTags>
            <MainTittle>{ques.title}</MainTittle>
            <MainDesc className={props.extend ? "extend" : ""}>
              <p>
                {props.extend || ques.context.length <= 74
                  ? ques.context
                  : ques.context.slice(0, 74) + "..."}
                {props.extend || ques.context.length <= 74 ? (
                  ""
                ) : (
                  <Extend
                    onClick={() => props.handleExtendChange(props.extend)}
                  >
                    <span>显示全部</span>
                    <i className="iconfont icon-open"></i>
                  </Extend>
                )}
              </p>
            </MainDesc>
          </MainQues>
          <FollowWrap>
            <NumItem className="follow_num">
              <p>关注者</p>
              <span>{ques.num_follow}</span>
            </NumItem>
            <NumItem>
              <p>被浏览</p>
              <span>{ques.num_hasWatch}</span>
            </NumItem>
          </FollowWrap>
        </QuesContent>
        <QuesFooter>
          <BtnItem className="guanzhu">
            <i className="iconfont icon-guanzhu"></i>
            <span>关注问题</span>
          </BtnItem>
          <BtnItem className="huida" onClick={() => setWriteStatus(true)}>
            <i className="iconfont icon-qianbi"></i>
            <span >写回答</span>
          </BtnItem>
          <BtnItem className="invite">
            <i className="iconfont icon-invite"></i>
            <span>邀请回答</span>
          </BtnItem>
          <Actoins>
            <i className="iconfont icon-iconku-zhuanqu-">
              <span>326条评论</span>
            </i>
            <i className="iconfont icon-feiji">
              <span>分享</span>
            </i>
            <i className="iconfont icon-jubaoReport">
              <span>举报</span>
            </i>
            {props.extend && ques.context.length > 74 ? (
              <i
                className="iconfont icon-shouqi"
                onClick={props.handleExtendChange}
              >
                <span>收起</span>
              </i>
            ) : (
              ""
            )}
          </Actoins>
        </QuesFooter>
      </QuesWrapper>
        
      <HomeWrapper>
        <HomeWrap>
          {
            writeStatus ? 
            <AnswerWrapper>
              <Editor />
              <BtnItem className="submit">提交回答</BtnItem>
            </AnswerWrapper> :
            ''
          }
          <MainColumn>
            {ques.replys.map(obj => {
              return <Content info={obj} key={obj.author.toString()} />;
            })}
          </MainColumn>
          <LeftColumn></LeftColumn>
        </HomeWrap>
      </HomeWrapper>
    </React.Fragment>
  );
}
const mapState = state => ({
  ques: state.getIn(["questions", "question"]),
  extend: state.getIn(["questions", "extend"])
});
const mapDisPatch = dispatch => ({
  handleCompleteQuestion() {
    dispatch(actions.getQuestion());
  },
  handleExtendChange(extend) {
    dispatch(actions.getExtendDesc(extend));
    window.scrollTo();
  }
});
export default connect(mapState, mapDisPatch)(QuesPage);
