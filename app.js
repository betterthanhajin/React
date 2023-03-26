import React, { Component, Fragment } from "react";

class App extends Component {
    render() {
        const name = 'react';
        return (
            <Fragment>
                <div>Hello { name }</div>
                <div>bye</div>
            </Fragment>
        );
    }
}

export default App;


function foo() {
    let a2 = 'hello';
    if(true) {
        let a2 = 'bye';
        console.log(a2);
    }
    console.log(a2);
}