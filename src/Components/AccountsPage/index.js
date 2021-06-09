import React from 'react'

import PageHeader from "../Utilities/PageHeader"
import AddAccountForm from "./AddAccountForm";
import AccountsTable from "./AccountsTable";

const AccountsPage = () => (
    <React.StrictMode>
        <PageHeader content="accounts" />
        <AddAccountForm />
        <AccountsTable />
    </React.StrictMode>
)

export default AccountsPage