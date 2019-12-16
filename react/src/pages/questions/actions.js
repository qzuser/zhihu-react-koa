import axios from "axios";
import { fromJS } from "immutable";

export function getQuestion() {
  return function(dispatch) {
    axios.get("/api/question.json").then(res =>
      dispatch({
        type: "get_question",
        data: fromJS(res.data)
      })
    );
  };
}
export function getExtendDesc(extend){
  return {
    type: 'Extend_Desc',
    data: !extend
  }
}
