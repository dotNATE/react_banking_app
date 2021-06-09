import React from "react"

const UserAccountTableRecord = (props) => (
    <tr>
        <td>{ props.name }</td>
        <td>{ props.balance }</td>
    </tr>
)

export default UserAccountTableRecord