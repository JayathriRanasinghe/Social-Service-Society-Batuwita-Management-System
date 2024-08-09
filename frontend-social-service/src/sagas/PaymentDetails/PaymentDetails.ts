import { call, put, takeLatest } from "redux-saga/effects";
import { PaymentInformation } from "../../constants/Actions";
import PaymentInformationService from "../../services/PaymentDetails";
import { PaymentInformationAction } from "../../actions/PaymentDetails";

const { allPayments } = PaymentInformationAction ?? {};

export const PaymentDetailsSaga = {
  paymentInformation: {
    get: function* (action: any) {
      console.log("In the saga....Member")
      const params = action?.payload?.data ?? {};
      try {
        const { data, status } = yield call(
            PaymentInformationService.getAllPayments.get,
          params
        );

        if (status === 200) {
          //updating the status success
          yield put(allPayments.success(data));
        } else {
          //updating the status fail
          yield put(allPayments.fail());
        }
      } catch (error) {
        yield put(allPayments.fail(error as any));
      }
    },
  },
};

export default [
  takeLatest(
    PaymentInformation.GET_PAYMENT_INFORMATION_START,
    PaymentDetailsSaga.paymentInformation.get
  ),
];
