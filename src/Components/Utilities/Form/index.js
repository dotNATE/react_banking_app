import React from "react"

const Form = (props) => (
    <form onSubmit={ props.submitter }>
        { props.children }
    </form>
)

export default Form