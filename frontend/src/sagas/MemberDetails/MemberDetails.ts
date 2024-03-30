import {call,put,takeLatest} from "redux-saga/effects";
import { MemberInformation } from "../../constants/Actions";
import {MemberInformationService} from "../../services";
import MemberDetails from "../../services/MemberDetails";
import { MemberInformationAction } from "../../actions/MemberDetails";


const {allMembers} = MemberInformationAction;

export const MemberDetailsSaga = {
    MemberInformation: {
        get: function* (action: any) {
            const params = action?.payload?.data ?? {};
            try {
                const {data,status} = yield call(
                    MemberDetails.getAllMembers.get,
                    params
                );
                
                if (status ===200){
                    //updating the status success
                    yield put(allMembers.success())
                }else{
                    //updating the status fail
                    yield put(allMembers.fail())
                }
            }
            catch (error){
                yield put(allMembers.fail())
            }
        }
    }
}

export default [
    takeLatest(
        MemberInformation.GET_MEMBER_INFORMATION_START,
        MemberDetailsSaga.MemberInformation.get
    )
]