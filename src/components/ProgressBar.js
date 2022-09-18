import React from "react";

const ProgressBar = (props) => {
    return(

        <div>
            <progress value={props.value} max={100} />
            <span>{props.value}</span>
        </div>
    )
}

export default ProgressBar;
