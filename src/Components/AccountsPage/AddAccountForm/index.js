import React from "react"
import Form from "../../Utilities/Form";
import NameInput from "../../Utilities/Form/NameInput";
import SimpleFormButton from "../../Utilities/Form/Buttons/SimpleFormButton";

const AddAccountForm = () => (
    <Form>
        <NameInput />
        <SimpleFormButton />
    </Form>
)

export default AddAccountForm