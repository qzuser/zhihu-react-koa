import { fromJS } from "immutable";
const defaultState = fromJS({
  question: {
    id: "",
    tag: [],
    context: "",
    num_follow: 0,
    num_hasWatch: 0,
    num_comment: 0,
    replys: []
  },
  extend: false,
  readAllStatus: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case "get_question":
      return state.merge({
        question: action.data
      });
    case 'Extend_Desc':
      return state.merge({
        extend: action.data
      })
    case 'Read_all':
      return state.merge({
        readAllStatus: action.data
      })
    default:
      return state;
  }
};
