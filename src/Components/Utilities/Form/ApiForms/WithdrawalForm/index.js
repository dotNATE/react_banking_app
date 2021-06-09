import React from 'react'

import Form from "../../index"
import SimpleFormButton from "../../Buttons/SimpleFormButton";
import AmountInput from "../../Inputs/AmountInput";

const WithdrawalForm = () => (
    <Form method="put" action="/withdrawals">
        <AmountInput />
        <SimpleFormButton />
    </Form>
)

export default WithdrawalForm