import { call, put, takeLatest } from "redux-saga/effects";
import { MemberInformation } from "../../constants/Actions";
import MemberInformationService from "../../services/MemberDetails";
import { MemberInformationAction } from "../../actions/MemberDetails";

const { allMembers } = MemberInformationAction ?? {};

export const MemberDetailsSaga = {
  memberInformation: {
    get: function* (action: any) {
      console.log("In the saga....Member")
      const params = action?.payload?.data ?? {};
      try {
        const { data, status } = yield call(
          MemberInformationService.getAllMembers.get,
          params
        );

        if (status === 200) {
          //updating the status success
          yield put(allMembers.success(data));
        } else {
          //updating the status fail
          yield put(allMembers.fail());
        }
      } catch (error) {
        yield put(allMembers.fail(error as any));
      }
    },
  },
};

export default [
  takeLatest(
    MemberInformation.GET_MEMBER_INFORMATION_START,
    MemberDetailsSaga.memberInformation.get
  ),
];
