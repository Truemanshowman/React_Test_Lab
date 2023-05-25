import React from "react";
import Dog from "./Dog";

function Animal(props){

    return (
        <div>
            <Dog name="진돗개 잭슨" age={5}/>
            <Dog name="리트리버 잭스" age={10}/>
        </div>        
        
    );
}
export default Animal;