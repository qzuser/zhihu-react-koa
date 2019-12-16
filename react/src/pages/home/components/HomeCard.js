import React from 'react';
import { CardWrap, CardItem } from "../style";

function HomeCard(){
  return (
    <CardWrap>
      <CardItem>
        <i className="iconfont icon-shoucang"></i>
        <span className="description">我的收藏</span>
        <span className="count">99</span>
      </CardItem>
      <CardItem>
        <i className="iconfont icon-wenti_huaban"></i>
        <span className="description">我关注的问题</span>
        <span className="count">0</span>
      </CardItem>
      <CardItem>
        <i className="iconfont icon-invite"></i>
        <span className="description">我的邀请</span>
        <span className="count">100</span>
      </CardItem>
      <CardItem>
        <i className="iconfont icon-wodeliquan"></i>
        <span className="description">我的礼券</span>
      </CardItem>
      <CardItem>
        <i className="iconfont icon-guanlizhongxin"></i>
        <span className="description">站务中心</span>
      </CardItem>
      <CardItem>
        <i className="iconfont icon-banquan"></i>
        <span className="description">版权服务中心</span>
      </CardItem>
    </CardWrap>
  );
}

export default HomeCard;