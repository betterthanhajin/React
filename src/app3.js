import React from "react";

const MyName = ({ name }) => {
    return <div>안녕하세용 제 이름은 {name} 입니다.</div>;
};

MyName.defaultProps = {
    name: 'velopert'
};

const object = { a: 1, b:2 };
const { a, b } = object;

function say({name,age}) {
    console.log(name + age);
}

say({name:'react', age:'none'});

export default MyName;