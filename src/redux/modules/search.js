import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const GET_SEARCH = "GET_SEARCH";

const getSearch = createAction(GET_SEARCH, (challenge) => ({ challenge}));

const initialState = {
  challenge: {
    challengeNum: "",
    challengeProgress: "",
    challengeImage: "",
    challengeTitle: "",
    challengeViewcnt: "",
    challengeCnt: "",
    challengeDate: "",
  },
};

const searchDB = (keyword) => {
  console.log(keyword);
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/search?keyword=${keyword}`,
      }).then((response) => {
        console.log(response);
        dispatch(getSearch(response));
      });
    } catch (err) {
      console.log(err);
      window.alert("검색 실패");
    }
  };
};

export default handleActions(
  {
    [GET_SEARCH]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.challenge = action.payload.challenge;
      }),
  },
  initialState
);

const ActionCreators = {
    searchDB
};

export { ActionCreators };
