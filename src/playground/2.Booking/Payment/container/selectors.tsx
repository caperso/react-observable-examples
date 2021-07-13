import { createSelector } from "reselect";
import { DOMAIN } from "../constants";
import { SelectStore } from "../types/SelectStore.type";
import { BookingState } from "../types/types";
import { PaymentFormContainerStateProps } from "./type";

const state: SelectStore<BookingState, PaymentFormContainerStateProps> = (
  state
) => state[DOMAIN];

const selectPayment: SelectStore = (store) =>
  createSelector(state(), () => store.paymentOptions);
