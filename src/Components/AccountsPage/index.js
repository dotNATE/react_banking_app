import React, { useState } from 'react'

import PageHeader from "../Utilities/PageHeader"
import AddAccountForm from "../Utilities/Form/ApiForms/AddAccountForm";
import AccountsTable from "./AccountsTable";

const AccountsPage = () => {
    const [accounts, setAccounts] = useState([])

    const getAccounts = () => {
        fetch('http://localhost:3001/accounts')
            .then(response => response.json())
            .then(response => setAccounts(response.data))
    }

    return (
        <React.StrictMode>
            <PageHeader content="accounts"/>
            <AddAccountForm effect={ getAccounts } />
            <AccountsTable accounts={ accounts } effect={ getAccounts } />
        </React.StrictMode>
    )
}

export default AccountsPage