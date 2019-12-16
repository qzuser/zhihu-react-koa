import axios from "axios";
import {fromJS} from 'immutable'
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/search.json')
    .then(response => dispatch({
      type:'GET_LIST',
      data: fromJS(response.data)
    }))
    .catch(err => console.log(err));
  }
}