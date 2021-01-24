import React from "react";

const style = {
    headerStyle: {
        color: "white",
        background: "blue",
        width: "100%",
        textAlign: "center",
        borderBottom: "solid orange",
        marginBottom: "10px",
        fontSize: "100px"
    }
}

function Header() {

    return (
        <div style={style.headerStyle} className="header">
            <h1>Employee Directory</h1>
            </div>
    )
}

export default Header;