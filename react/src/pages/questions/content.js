import React, { useState }from 'react';
import {
  ListItem,
  ListItemHeader,
  ListItemText,
  ListItemFooter,
  FooterItem,
  ReadAll
} from "./style";

function Content(props){
  const [readAllStatus, setReadAllStatus] = useState(false);
  const info = props.info;
  return (
    <ListItem>
      <ListItemHeader>
        <div></div>
        <p>{info.author}</p>
        <span>{info.author_desc}</span>
      </ListItemHeader>
      <ListItemText className={readAllStatus ? "extend" : ""}>
        {readAllStatus || info.text.length < 420
          ? info.text
          : info.text.slice(0, 420) + "..."}

        {readAllStatus || info.text.length < 420 ? (
          ""
        ) : (
          <ReadAll onClick={() => setReadAllStatus(true)}>阅读全文</ReadAll>
        )}
      </ListItemText>
      <ListItemFooter>
        <FooterItem className="iconfont icon-top-s isAgree">
          {info.nums_agree}赞同
        </FooterItem>
        <FooterItem className="iconfont icon-below-s isAgree"></FooterItem>
        <FooterItem className="iconfont icon-pinglun1">
          {info.nums_replys} 条评论
        </FooterItem>
        <FooterItem className="iconfont icon-feiji1">分享</FooterItem>
        <FooterItem className="iconfont icon-shoucang">收藏</FooterItem>
        <FooterItem className="iconfont icon-xin">感谢</FooterItem>
        <FooterItem className="iconfont icon-sandian"></FooterItem>
        {
          readAllStatus ? <FooterItem className={"iconfont icon-shouqi"} onClick={() => setReadAllStatus(false)}>收起</FooterItem>:" "
        }
      </ListItemFooter>
    </ListItem>
  );
}

export default Content;