import React from 'react'

import PageHeader from "../Utilities/PageHeader"
import AddAccountForm from "../Utilities/Form/ApiForms/AddAccountForm";
import AccountsTable from "./AccountsTable";

const AccountsPage = () => (
    <React.StrictMode>
        <PageHeader content="accounts" />
        <AddAccountForm action="www.google.com"/>
        <AccountsTable />
    </React.StrictMode>
)

export default AccountsPage