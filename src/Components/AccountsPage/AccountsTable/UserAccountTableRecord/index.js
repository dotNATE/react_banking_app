import React from "react"
import {Link} from "react-router-dom";

const UserAccountTableRecord = (props) => (
    <tr>
        <td><Link to={ "/account/" + props.id }>{ props.name }</Link></td>
        <td>{ props.balance }</td>
    </tr>
)

export default UserAccountTableRecord