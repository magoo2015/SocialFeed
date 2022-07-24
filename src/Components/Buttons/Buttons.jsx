import { useState } from "react";
import './Buttons.css';

const Buttons = (props) => {

    function handleClick(){

    }


    return (
        <div>
            <div>
                <button className="approveButton" onClick={handleClick}></button>
            </div>
            <div>
                <button className="disapproveButton" onClick={handleClick}></button>
            </div>

        </div>
    )
}

export default Buttons;