import React from 'react'
import "App.css"

function Layout(props) {

    return (
        <>
        <header className="headerStyle">
        <h1>💜My Todo List💜</h1>
        </header>
        {props.children}
        </>
    );
}

export default Layout