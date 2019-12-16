import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { TabWrap, TabItem } from "../style";

function HomeTab(){
  const [reco, setReco] = useState(false);
  const [atten, setAtten] = useState(false);
  const [heat, setHeat] = useState(true);
  return (
    <React.Fragment>
      <TabWrap>
        <TabItem 
          className={reco ? 'reco' : ''} 
          onClick={() => {setReco(true); setAtten(false); setHeat(false)}}
          >
            <Link to="" className="tab-link">推荐</Link>
        </TabItem>

        <TabItem 
          className={atten ? 'atten' : ''} 
          onClick={() => {setReco(false); setAtten(true); setHeat(false)}}
          >
            <Link to="" className="tab-link">关注</Link>
        </TabItem>

        <TabItem 
          className={heat ? 'heat' : ''} 
          onClick={() => {setReco(false); setAtten(false); setHeat(true)}}
          >
            <Link to="" className="tab-link">热榜</Link>
        </TabItem>
        
      </TabWrap>
    </React.Fragment>
  )
}

export default HomeTab;