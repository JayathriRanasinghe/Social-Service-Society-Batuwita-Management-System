import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducerMemberDetails } from "./reducers";
import { History } from "history";

const reducers = {
  reducerMemberDetails,
};

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export default rootReducer;
