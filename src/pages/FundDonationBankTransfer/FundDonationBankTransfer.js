import React from "react";
import ReceiverBankAccount from "../../components/ReceiverBankAccount/ReceiverBAnkAccount";
import ToastSoS from "../../components/Toast/Toast";

function BankTransfer() {
  return (
    <div>
      <ToastSoS />
      <ReceiverBankAccount />{" "}
    </div>
  );
}

export default BankTransfer;
