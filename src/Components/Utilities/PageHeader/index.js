import React from "react"

const PageHeader = (props) => (
    <div>
        <h1 className="pageHeader">{ props.content }</h1>
        { props.children }
    </div>
)

export default PageHeader