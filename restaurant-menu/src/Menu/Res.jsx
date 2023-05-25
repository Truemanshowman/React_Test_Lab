import React from "react";
import ResMenu from "./ResMenu";

function Res(props){

    return(
        <div>
            <ResMenu name="스테이크" price={10000}/>
            <ResMenu name="파스타" price={8000}/>
            <ResMenu name="아이스크림" price={5000}/>
            <ResMenu name="아무거나 먹어라" price={100000}/>
        </div>        

    )

}
export default Res