import React from 'react';
import {Link, useParams } from 'react-router-dom';
import {
  ListItem,
  ListRank,
  ListContent,
  ListPic,
  ListTitle,
  ListDesc,
  ListBottom
} from "../style";

function HomeList(props){
  const list = props.list;
  return (
    <ListItem>
    <ListRank>{list.id+1}</ListRank>
      <ListContent>
        <Link to={"/heat/detail/"+ list.id}>
          <ListTitle>
            {list.title}
          </ListTitle>
          <ListDesc>{list.desc}</ListDesc>
        </Link>
        <ListBottom>
          <i className="iconfont icon-huoyan"><span>{list.heat}热度</span></i>
          <i className="iconfont icon-feiji1"><span>分享</span></i>
        </ListBottom>
      </ListContent>
      <Link to={"heat/detail/"+list.id}><ListPic imgUrl={list.imgUrl}/></Link>
    </ListItem>
  );
}

export default HomeList;