import React from 'react'

import Form from "../../index"
import SimpleFormButton from "../../Buttons/SimpleFormButton";

const DeleteAccountForm = (props) => (
    <Form method="delete" action={ props.action }>
        <SimpleFormButton />
    </Form>
)

export default DeleteAccountForm