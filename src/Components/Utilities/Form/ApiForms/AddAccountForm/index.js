import React from "react"

import Form from "../../index";
import NameInput from "../../Inputs/NameInput";
import SimpleFormButton from "../../Buttons/SimpleFormButton";

const AddAccountForm = (props) => {
    const handleFormSend = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/accounts', {
            method: 'POST',
            body: JSON.stringify({
                "name": e.target[0].value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => console.log(response))
        props.effect()
    }

    return (
        <Form submitter={ handleFormSend }>
            <NameInput/>
            <SimpleFormButton/>
        </Form>
    )
}

export default AddAccountForm