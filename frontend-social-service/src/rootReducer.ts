// rootReducer.ts
import { combineReducers } from 'redux';
import { reducerMemberDetails } from './reducers/MemberDetails';

const rootReducer = combineReducers({
    reducerMemberDetails: reducerMemberDetails,
    
    // other reducers if any
})
console.log("In the reducer root........")
;

export default rootReducer;