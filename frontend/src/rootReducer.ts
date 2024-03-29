import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history"

import { reducerMemberDetails } from "./reducers";

const reducers = {
    reducerMemberDetails
};

const rootReducer = (history: History ) =>
    combineReducers({
        router: connectRouter(history),
        ...reducers
    });

export default rootReducer;