import React, { useEffect } from "react"

import TableHeader from "./TableHeader";
import UserAccountTableRecord from "./UserAccountTableRecord";

const AccountsTable = (props) => {
    useEffect(() => props.effect(), [props.accounts])

    return (
        <table className="accountsTable">
            <TableHeader/>
            <tbody>
                { props.accounts.map(account => <UserAccountTableRecord id={account._id} name={account.name} balance={account.balance} />) }
            </tbody>
        </table>
    )
}

export default AccountsTable