import React, {useEffect, useState} from "react"

import TableHeader from "./TableHeader";
import UserAccountTableRecord from "./UserAccountTableRecord";

const AccountsTable = (props) => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/accounts')
            .then(response => response.json())
            .then(response => setAccounts(response.data))
    }, [])

    return (
        <table className="accountsTable">
            <TableHeader/>
            <tbody>
                { accounts.map(account => <UserAccountTableRecord id={account._id} name={account.name} balance={account.balance} />) }
            </tbody>
        </table>
    )
}

export default AccountsTable