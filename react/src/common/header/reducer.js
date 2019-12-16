import {fromJS} from 'immutable'
const defaultState = fromJS({
list: []
})

export default(state = defaultState, action) => {
  switch (action.type) {
    case "GET_LIST":
      return state.merge({
        'list': action.data
      });
    default:
      return state;
  }
}