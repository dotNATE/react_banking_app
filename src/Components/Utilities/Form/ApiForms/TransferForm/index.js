import React from 'react'

import Form from "../../index"
import AmountInput from "../../Inputs/AmountInput";
import IdInput from "../../Inputs/IdInput";
import MultiInputFormButton from "../../Buttons/MultiInputFormButton";

const TransferForm = (props) => (
    <Form method="put" action={ props.action }>
        <IdInput />
        <AmountInput />
        <MultiInputFormButton />
    </Form>
)

export default TransferForm