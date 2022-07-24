import { useState } from "react";
import './Buttons.css';

const Buttons = (props) => {
//Only the Like button works.  Even if I click dislike it highlights the like...
    const [approveButton, setApproveButton ] = useState("inactive");
    const [disapproveButton, setDisapproveButton] = useState("inactive")

    function handleClick(){
        if(approveButton === "inactive"){
            setApproveButton('active');
            setDisapproveButton('inactive');
        }
        else if (approveButton === "active"){
            setApproveButton('inactive');
        }
        else if (disapproveButton === "inactive"){
            setDisapproveButton("active");
            setApproveButton('inactive');
        }
        else if (disapproveButton === "active"){
            setDisapproveButton("inactive");
        }
    }

    return (
        <div>
            <div>
                <button className={approveButton} onClick={handleClick} name="approve" id="approve">Like 😀</button>
            </div>
            <div>
                <button className={disapproveButton} onClick={handleClick} name="disapprove" id="disapprove">Dislike 🥵</button>
            </div>

        </div>
    )
}

export default Buttons;