import { MemberInformation } from "../constants/Actions";
import { IAPIAction } from "../interfaces";

const {
  GET_MEMBER_INFORMATION_START,
  GET_MEMBER_INFORMATION_SUCCESS,
  GET_MEMBER_INFORMATION_FAIL,
} = MemberInformation;
console.log("Inside the action file ................. of member")
export const MemberInformationAction: Readonly<IAPIAction> = {
  allMembers: {
    get: (data: any) => ({
      type: GET_MEMBER_INFORMATION_START,
      payload: {
        data,
        isLoading: true,
      },
    }),
    success: (data: any) => ({
      type: GET_MEMBER_INFORMATION_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: GET_MEMBER_INFORMATION_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    }),
  },
};
