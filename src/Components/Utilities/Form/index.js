import React from "react"

const Form = (props) => (
    <form method={ props.method }>
        { props.children }
    </form>
)

export default Form