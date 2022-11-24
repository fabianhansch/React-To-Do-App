import "./ListItem.css";
//import { useState } from "react";
//import { AddListItem } from "../AddListItem/AddListItem";

export function ListItem({items, handleOnClick}) {

    

    return(
        <div>
            <ul>
                {items.map((item, index) => {
                    return (
                    <div key={index}>
                        <li>{item}</li>
                        <button onClick={() => handleOnClick(index)} >Done</button>
                    </div>
                        );
                })}
            </ul>
            
        </div>
    );
}