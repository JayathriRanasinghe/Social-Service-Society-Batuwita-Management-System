import { PaymentInformation } from "../../constants/Actions";
import { InitialState } from "./InitialState";

export default function (state = InitialState, action: any) {
  switch (action.type) {
    case PaymentInformation.GET_PAYMENT_INFORMATION_START:
      console.log("in the reducer.....member.")
      return Object.assign({}, state, {
        paymentDetails: {
          ...state.paymentDetails,
          isLoading: true,
        },
      });

    case PaymentInformation.GET_PAYMENT_INFORMATION_SUCCESS:
      console.log("in the reducer.....member success.")
      return Object.assign({}, state, {
        paymentDetails: {
          data: action.payload.data,
          isLoading: false,
        },
      });
    case PaymentInformation.GET_PAYMENT_INFORMATION_FAIL:
      console.log("in the reducer.....fail.")
      return Object.assign({}, state, {
        paymentDetails: {
          data: [],
          isLoading: false,
        },
      });
    default:
      return state;
  }
}
