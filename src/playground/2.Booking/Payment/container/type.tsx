export interface State{

}

// Props will come from parent component
export interface PaymentFormContainerOwnProps {}

// StateProps stands for Redux-inject State "Props"
export interface PaymentFormContainerStateProps {}

// Dispatch
export interface DispatchProps {
  submitForm: SubmitForm;
}

export type PaymentFromContainerProps = PaymentFormContainerOwnProps &
  PaymentFormContainerStateProps &
  DispatchProps;

export interface FromValue {}

export type SubmitForm = (value: FromValue) => void;
