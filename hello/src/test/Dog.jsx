import React from "react";

function Dog(props){

    return (

        <div>

        <h1>{`강아지의 이름: ${props.name}`}</h1>
        <h2>{`강아지의 나이: ${props.age}`}</h2>

        </div>
    )   
}
export default Dog