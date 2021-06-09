import React from "react"

import TableHeader from "./TableHeader";
import UserAccountTableRecord from "./UserAccountTableRecord";

const AccountsTable = (props) => (
    <table className="accountsTable">
        <TableHeader />
        <tbody>
            <UserAccountTableRecord name="nathaniel" balance="420" id="69"/>
        </tbody>
    </table>
)

export default AccountsTable