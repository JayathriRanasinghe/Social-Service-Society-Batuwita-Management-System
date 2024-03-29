import { MemberInformation } from "../../constants/Actions";
import { InitialState } from "./InitialState";

export default function (state = InitialState, action:any){
    switch (action.type) {
        case MemberInformation.GET_MEMBER_INFORMATION_START:
            return Object.assign({}, state, {});
        
        case MemberInformation.GET_MEMBER_INFORMATION_SUCCESS:
            return Object.assign({}, state, {
                memberDetails: action.payload.data
            });
        case MemberInformation.GET_MEMBER_INFORMATION_FAIL:
            return Object.assign({}, state, {
                memberDetails: {}
            });
    }
}