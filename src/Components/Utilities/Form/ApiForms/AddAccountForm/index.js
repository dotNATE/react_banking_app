import React from "react"

import Form from "../../index";
import NameInput from "../../Inputs/NameInput";
import SimpleFormButton from "../../Buttons/SimpleFormButton";

const AddAccountForm = (props) => (
    <Form method="post" action={ props.action }>
        <NameInput />
        <SimpleFormButton />
    </Form>
)

export default AddAccountForm