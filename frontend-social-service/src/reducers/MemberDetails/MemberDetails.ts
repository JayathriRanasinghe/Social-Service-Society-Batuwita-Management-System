import { MemberInformation } from "../../constants/Actions";
import { InitialState } from "./InitialState";

export default function (state = InitialState, action: any) {
  switch (action.type) {
    case MemberInformation.GET_MEMBER_INFORMATION_START:
      console.log("in the reducer.....member.")
      return Object.assign({}, state, {
        memberDetails: {
          ...state.memberDetails,
          isLoading: true,
        },
      });

    case MemberInformation.GET_MEMBER_INFORMATION_SUCCESS:
      console.log("in the reducer.....member success.")
      return Object.assign({}, state, {
        memberDetails: {
          data: action.payload.data,
          isLoading: false,
        },
      });
    case MemberInformation.GET_MEMBER_INFORMATION_FAIL:
      console.log("in the reducer.....fail.")
      return Object.assign({}, state, {
        memberDetails: {
          data: [],
          isLoading: false,
        },
      });
    default:
      return state;
  }
}
