import axios from "axios";
import {fromJS} from 'immutable'

export function changeTopics(){
  return function(dispatch){
    axios.get('/api/topic.json')
    .then(res =>
      dispatch({
        type:"Change_Topics",
        data: fromJS(res.data)
    }))
  }
}
export const toggleTopicB = () => ({
  type: 'topic_Flag_ToB'
})
export const toggleTopicA = () => ({
  type: 'topic_Flag_ToA'
})

export function changeList(){
  return function(dispatch){
    axios.get("/api/heatList.json").then(res =>
      dispatch({
        type: "Change_List",
        data: fromJS(res.data)
      })
    );
  }
}