import { MemberInformation } from "../../constants/Actions";
import { InitialState } from "./InitialState";

export default function (state = InitialState, action: any) {
  switch (action.type) {
    case MemberInformation.GET_MEMBER_INFORMATION_START:
      return Object.assign({}, state, {
        memberDetails: {
          ...state.memberDetails,
          isLoading: true,
        },
      });

    case MemberInformation.GET_MEMBER_INFORMATION_SUCCESS:
      return Object.assign({}, state, {
        memberDetails: {
          data: action.payload.data,
          isLoading: false,
        },
      });
    case MemberInformation.GET_MEMBER_INFORMATION_FAIL:
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
