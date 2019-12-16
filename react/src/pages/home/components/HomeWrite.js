import React from 'react';
import { WriteWrap, WriteItem, WriteItemDsec, WriteItem2 } from "../style";

function HomeWrite(){
  return (
    <WriteWrap>
      <WriteItem>
        <p className="iconfont icon-iconku-zhuanqu-"></p>
        <WriteItemDsec>写回答</WriteItemDsec>
      </WriteItem>
      <WriteItem>
        <p className="iconfont icon-wenzhang"></p>
        <WriteItemDsec>写文章</WriteItemDsec>
      </WriteItem>
      <WriteItem>
        <p className="iconfont icon-xiangfa"></p>
        <WriteItemDsec>写想法</WriteItemDsec>
      </WriteItem>
      <WriteItem2 className="first">
        <i className="iconfont icon-shaohouzaikanx"></i>
        <span>我的稍后答</span>
      </WriteItem2>
      <WriteItem2>
        <i className="iconfont icon-dvt-draft"></i>
        <span>我的草稿</span>
      </WriteItem2>
    </WriteWrap>
  );
}

export default HomeWrite;