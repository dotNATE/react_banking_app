import React, { useState, useEffect } from "react"

import PageHeader from "../Utilities/PageHeader";
import DeleteAccountForm from "../Utilities/Form/ApiForms/DeleteAccountForm";
import DepositForm from "../Utilities/Form/ApiForms/DepositForm";
import WithdrawalForm from "../Utilities/Form/ApiForms/WithdrawalForm";
import TransferForm from "../Utilities/Form/ApiForms/TransferForm";

const SingleAccountPage = (props) => {
    const [account, setAccount] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/accounts/' + props.match.params.id)
            .then(response => response.json())
            .then(response => setAccount(response.data[0]))
    })

    return (
        <React.StrictMode>
            <PageHeader content={ "account: " + account.name }>
                <p>{account._id}</p>
            </PageHeader>
            <DepositForm id={account._id}/>
            <WithdrawalForm id={account._id}/>
            <TransferForm id={account._id}/>
            <DeleteAccountForm id={account._id}/>
        </React.StrictMode>
    )
}

export default SingleAccountPage