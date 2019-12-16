import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import  * as actionCreators from './actionCreators'
import HomeTab from './components/HomeTab';
import SelectedTopic from './components/SelectedTopic';
import HomeTopic from './components/HomeTopic';
import HomeList from "./components/HomeList";
import HomeWrite from './components/HomeWrite';
import Community from './components/Community';
import Advertising from './components/Advertising';
import CardWrap from './components/HomeCard';
import {
  HomeWrapper,
  HomeWrap,
  MainColumn,
  ListWrap,
  LeftColumn,
} from "./style";
function HomePage(props){
  useEffect(() => {
    props.handleTopicChange(props.topics.size);
  });
  useEffect(() => {
    props.handleListChange(props.list.size)
  })
  const list = props.list.toJS();
  return (
    <HomeWrapper>
      <HomeWrap>
        <MainColumn>
          <HomeTab />
          {props.topicFlag ? <HomeTopic /> : <SelectedTopic />}
          <ListWrap>
            {
              list.map(val => {
                return <HomeList key={val.id} list={val}></HomeList>;
              })}
          </ListWrap>
        </MainColumn>
        <LeftColumn>
          <HomeWrite />
          <Community />
          <Advertising />
          <CardWrap />
        </LeftColumn>
      </HomeWrap>
    </HomeWrapper>
  );
}
const mapStateToProps = state => ({
  topics: state.getIn(['home', 'topics']),
  topicFlag: state.getIn(["home", "topicFlag"]),
  list: state.getIn(["home", "list"])
})
const mapDispatchToProps = dispatch => ({
  handleTopicChange(size) {
    size === 0 && dispatch(actionCreators.changeTopics());
  },
  handleListChange(size){
    size === 0 && dispatch(actionCreators.changeList());  //??为什么会渲染多次？？console.log(props.list)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);