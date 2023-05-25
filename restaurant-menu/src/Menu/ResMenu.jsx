import React from "react"


function ResMenu(props){
    
    return(
        <div>
            <h2>{`식당 메뉴: ${props.name}`}</h2>
            <h2>{`메뉴 가격: ${props.price}`}</h2>
        </div>

    )
}
export default ResMenu;
