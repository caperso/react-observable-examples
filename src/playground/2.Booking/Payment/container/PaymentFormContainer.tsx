import { Form } from "react-final-form";
import { connect } from "react-redux";
import {
    DispatchProps,
  FromValue,
  PaymentFormContainerStateProps,
  PaymentFromContainerProps,
} from "./type";

export const PaymentFormContainer: PaymentFromContainerProps = ({
  submitForm,
}: PaymentFormContainerStateProps & DispatchProps) => {
  const handleSubmit = (value: FromValue) => {
    submitForm(value);
  };

  return (
    <Form>
      {(onSubmit) => {
        <form action="" onSubmit={handleSubmit}>
          <h1>Payment</h1>
        </form>;
      }}
    </Form>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
