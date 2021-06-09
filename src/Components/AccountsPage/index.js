import React from 'react'

import PageHeader from "../Utilities/PageHeader"
import AddAccountForm from "./AddAccountForm";

const AccountsPage = () => (
    <React.StrictMode>
        <PageHeader content="accounts" />
        <AddAccountForm />
    </React.StrictMode>
)

export default AccountsPage