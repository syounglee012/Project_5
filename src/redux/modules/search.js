import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const GET_SEARCH = "GET_SEARCH";

const getSearch = createAction(GET_SEARCH, (challenges) => ({
  challenges,
}));

const initialState = {
  challenges: [
  
  ],
};

const searchDB = (keyword) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/search?keyword=${keyword}`,
      }).then((response) => {
        dispatch(getSearch(response));
      });
    } catch (err) {
      console.log(err);
      toast.error(`${keyword}에 대한 챌린지가 없습니다`, { position:"top-center" });
    }
  };
};

export default handleActions(
  {
    [GET_SEARCH]: (state, action) =>
      produce(state, (draft) => {
        draft.challenges = action.payload.challenges.data;
      }),
  },
  initialState
);

const ActionCreators = {
  searchDB,
};

export { ActionCreators };
