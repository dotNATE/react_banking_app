import React from "react"

const Form = (props) => (
    <form action={ props.action }>
        { props.children }
    </form>
)

export default Form