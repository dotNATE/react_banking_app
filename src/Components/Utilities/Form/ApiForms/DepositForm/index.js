import React from 'react'

import Form from "../../index"
import SimpleFormButton from "../../Buttons/SimpleFormButton";
import AmountInput from "../../Inputs/AmountInput";

const DepositForm = (props) => (
    <Form method="put" action={ props.action }>
        <AmountInput />
        <SimpleFormButton />
    </Form>
)

export default DepositForm