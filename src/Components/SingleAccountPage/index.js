import React from "react"

import PageHeader from "../Utilities/PageHeader";
import DeleteAccountForm from "../Utilities/Form/ApiForms/DeleteAccountForm";
import DepositForm from "../Utilities/Form/ApiForms/DepositForm";
import WithdrawalForm from "../Utilities/Form/ApiForms/WithdrawalForm";
import TransferForm from "../Utilities/Form/ApiForms/TransferForm";

const SingleAccountPage = (props) => (
    <React.StrictMode>
        <PageHeader content="account: Nathaniel">
            <p>{ props.match.params.id }</p>
        </PageHeader>
        <DepositForm id={ props.match.params.id }/>
        <WithdrawalForm id={ props.match.params.id }/>
        <TransferForm id={ props.match.params.id }/>
        <DeleteAccountForm id={ props.match.params.id }/>
    </React.StrictMode>
)

export default SingleAccountPage