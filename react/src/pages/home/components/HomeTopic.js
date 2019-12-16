import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from "../actionCreators";
import {
  TopicWrap,
  TopicTitle,
  TopicDesc,
  TopicBtn,
  TopicContent,
  TopicItem,
  TopicBottom
} from "../style";

function HomeTopic(props){
  return (
    <TopicWrap>
      <div>
        <TopicTitle>我的话题</TopicTitle>
        <TopicDesc>拖动调整顺序</TopicDesc>
        <TopicBtn
          onClick={() => {
            props.handleToggleTopicToA();
          }}
          className="iconfont icon-shouqi"
        />
      </div>
      <TopicContent>
        {props.topics.toJS().map(val => {
          if (!val.select) return "";
          return <TopicItem key={val.id}>{val.topic}</TopicItem>;
        })}
      </TopicContent>
      <div>
        <p style={{ display: "inline-block", marginRight: "1rem" }}>推荐话题</p>
        <span style={{ color: "#999", fontSize: ".9375rem" }}>
          拖动调整顺序
        </span>
      </div>
      <TopicContent>
        {props.topics.toJS().map(val => {
          if (val.select) return "";
          return <TopicItem key={val.id}>{val.topic}</TopicItem>;
        })}
      </TopicContent>
      <TopicBottom>
        <TopicItem className="cancel">取消</TopicItem>
        <TopicItem className="sure">确认</TopicItem>
      </TopicBottom>
    </TopicWrap>
  );
}
const mapState = state => ({
  topics: state.getIn(['home', 'topics'])
})
const mapDispatch = dispatch => ({
  handleToggleTopicToA(){
    dispatch(actionCreators.toggleTopicA());
  }
})
export default connect(mapState, mapDispatch)(HomeTopic);