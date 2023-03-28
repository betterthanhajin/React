import React, { Component, Fragment } from "react";
import './App.css';

class App extends Component {
    render() {
        const style = {
          backgroundColor:'black',
          padding:'16px',
          color:'white',
          fontSize:'36px'  
        };
        const name = 'react';
        return (
            <Fragment style={style} className="App">
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