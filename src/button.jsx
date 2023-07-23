import React from "react";
import './button.css';

export default function Button(props)
{
    return(
        <div className={props.cl}>
            <input type="button" className={props.cl1} value={props.val} onClick={props.handleClick}/>
        </div>
    )
}