import React, { useState } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { BtnItem } from '../../pages/questions/style'
import {
  HeaderWrap,
} from "./style";

function Header(props) {
  const [writeStatus, setWriteStatus] = useState(false)
  return (
    <React.Fragment>
      <HeaderWrap>
        {writeStatus}
        {props.ques.replys}
        <BtnItem className="guanzhu">
          <i className="iconfont icon-guanzhu"></i>
          <span>关注问题</span>
        </BtnItem>
        <BtnItem className="huida" onClick={() => setWriteStatus(true)}>
          <i className="iconfont icon-qianbi"></i>
          <span>写回答</span>
        </BtnItem>
      </HeaderWrap>
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  ques: state.getIn(['questions', 'question'])
});
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
