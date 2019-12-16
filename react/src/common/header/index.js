import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import * as actionCreators from './actionCreators';
//import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrap,
  SearchInput,
  SearchWraper,
  NavItem,
  NavItem2,
  Logo,
  Button,
  SearchInfo,
  SearchTitle,
  SearchItem
} from "./style";

function Header(props){
  const [focus, setFocus] = useState(false);
  const [mouseIn, setMouseIn] = useState(false);
  const [homeState, setHomeState] = useState(true);
  const [findState, setFindState] = useState(false);
  const [replyState, setReplyState] = useState(false);
  
  const renderList = () => {
    var res = [];
    for(let val of props.list){
      res.push(<SearchItem key={val}>{val}</SearchItem>)
    }
    if (focus || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={() => setMouseIn(true)}
          onMouseLeave={() => setMouseIn(false)}
        >
          <SearchTitle>知乎热搜</SearchTitle>
          {res}
        </SearchInfo>
      );
    } else return null;
  }

  return (
    <React.Fragment>
      <HeaderWrap>
        <Logo />
        <NavItem className={homeState ? 'homeState' : ''} onClick={() => {setHomeState(true); setFindState(false); setReplyState(false)}}><Link to="" className="link">首页</Link></NavItem>
        <NavItem className={findState ? 'findState' : ''} onClick={() => {setHomeState(false); setFindState(true);  setReplyState(false)}}><Link to="" className="link">发现</Link></NavItem>
        <NavItem2 className={replyState ? 'replyState' : ''} onClick={() => {setHomeState(false); setFindState(false);  setReplyState(true)}}><Link to="" className="link">等你来答</Link></NavItem2>
        <SearchWraper
          onFocus={() => props.handleFocusChange(props.list, setFocus)}
          onBlur={() => setFocus(false)}
        >
          <SearchInput placeholder="搜一搜"></SearchInput>
          <i className="iconfont icon-fangdajing"></i>
          {renderList()}
        </SearchWraper>
        <Button>提问</Button>
        <NavItem>
          <i className="iconfont icon-lingdang"></i>
        </NavItem>
        <NavItem>
          <i className="iconfont icon-sixin"></i>
        </NavItem>
        <NavItem>
          <i className="iconfont icon-photo"></i>
        </NavItem>
      </HeaderWrap>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  list: state.get('header').get('list')
})
const mapDispatchToProps = dispatch => ({
  handleFocusChange(list, setFocus) {
    setFocus(true);
    list.size === 0 && dispatch(actionCreators.getList());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
 