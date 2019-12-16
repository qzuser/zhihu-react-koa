import React from 'react';
import { toggleTopicB } from "../actionCreators";
import {connect} from 'react-redux';
import {
  SelectWrap,
  TopicBtn,
  TopicItem,
} from "../style";

function SelectedTopic(props){
  // const [focusId, setFocusId] = useState(0);
  
  return (
    <SelectWrap>
      {props.topics.toJS().map(val => {
        if (!val.select) return "";
        return <TopicItem key={val.id}>{val.topic}</TopicItem>;
      })}
      <TopicBtn
        className="iconfont icon-open"
        onClick={() => {props.handleToggleTopicToB()}}
      ></TopicBtn>
    </SelectWrap>
  );
}


const mapState = (state) => ({
  topics: state.getIn(['home', 'topics'])
})
const mapDispatch = (dispatch) => ({
  handleToggleTopicToB(){
    dispatch(toggleTopicB())
  }
})
export default connect(mapState, mapDispatch)(SelectedTopic);