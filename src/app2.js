import React, { Component, Fragment } from "react";

class App extends Component {
    render() {
        const value = 1;
        return (
            <Fragment>
                <div>
                    {
                        1 + 1 === 2
                        ? (<div>맞아요!</div>)
                        : (<div>틀려요!</div>)
                    }
                </div>

                <div>
                    {
                    (function() {
                        if (value === 1) return <div>1이다</div>
                        if(value === 2) return <div>2이다</div>
                        if(value === 3) return <div>3이다</div>
                        return <div>none</div>
                    })()
                    }
                </div>
            </Fragment>
        );
    }
}

export default App;


function foo() {
    var a = 'hello';
    if(true) {
        var a = 'bye';
        console.log(a);
    }
    console.log(a);
}