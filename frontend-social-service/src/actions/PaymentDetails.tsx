import { PaymentInformation } from "../constants/Actions";
import { IAPIAction } from "../interfaces";

const {
    GET_PAYMENT_INFORMATION_START,
    GET_PAYMENT_INFORMATION_SUCCESS,
    GET_PAYMENT_INFORMATION_FAIL,
} = PaymentInformation;

console.log("Inside the action file ................. of member")
export const PaymentInformationAction: Readonly<IAPIAction> = {
  allPayments: {
    get: (data: any) => ({
      type: GET_PAYMENT_INFORMATION_START,
      payload: {
        data,
        isLoading: true,
      },
    }),
    success: (data: any) => ({
      type: GET_PAYMENT_INFORMATION_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: GET_PAYMENT_INFORMATION_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    }),
  },
};
