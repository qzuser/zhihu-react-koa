import React from 'react';
import { CommunityWrap, CommunityItem } from "../style";

function Community(){
  return (
    <CommunityWrap>
      <CommunityItem>
        <i className="iconfont icon-shandian"></i>
        <p className="shandian">Live</p>
      </CommunityItem>
      <CommunityItem>
        <i className="iconfont icon-shu2"></i>
        <p className="shu2">书店</p>
      </CommunityItem>
      <CommunityItem>
        <i className="iconfont icon-yuanzhuo"></i>
        <p className="yuanzhuo">圆桌</p>
      </CommunityItem>
      <CommunityItem>
        <i className="iconfont icon-zhuanlan"></i>
        <p className="zhuanlan">专栏</p>
      </CommunityItem>
      <CommunityItem>
        <i className="iconfont icon-fufei"></i>
        <p className="fufei">付费咨询</p>
      </CommunityItem>
    </CommunityWrap>
  );
}

export default Community;