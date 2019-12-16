import { fromJS } from 'immutable';
const defaultState = fromJS({
  topics: [],
  topicFlag: false,
  list:[]
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case "Change_Topics":
      return state.merge({
        'topics': action.data
      });
    case "topic_Flag_ToB":
      return state.merge({
        'topicFlag': true
      });
    case "topic_Flag_ToA":
      return state.merge({
        'topicFlag': false
      })
    case "Change_List":
      return state.merge({
        'list': action.data
      })
    default:
      return state;
  }
}