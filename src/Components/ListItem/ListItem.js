import "./ListItem.css";
import { useState } from "react";

export function ListItem() {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(value);
        setValue("");
    };

    const addItem = (textInput) => {
        const newItemList = [...items, textInput];
        setItems(newItemList);
    }

    const changeValue = (e) => {
        setValue(e.target.value);
    }
    
    return(
        <div>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

            <form onSubmit={handleSubmit}>
                <label htmlFor="newTask">New Task</label>
                <input id="newTask" type="text" value={value} onChange={changeValue}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}