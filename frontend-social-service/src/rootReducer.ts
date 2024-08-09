// rootReducer.ts
import { combineReducers } from 'redux';
import { reducerMemberDetails } from './reducers/MemberDetails';
import { reducerPaymentDetails } from './reducers/PaymentDetails';

const rootReducer = combineReducers({
    reducerMemberDetails: reducerMemberDetails,
    reducerPaymentDetails: reducerPaymentDetails,

    
    // other reducers if any
})
console.log("In the reducer root........")
;

export default rootReducer;