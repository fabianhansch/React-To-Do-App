import "./AddListItem.css";
//import { ListItem } from "../ListItem/ListItem";
import { useState } from "react";
import { ListItem } from "../ListItem/ListItem";

export function AddListItem() {
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
        console.log(newItemList);
    };

    const changeValue = (e) => {
        setValue(e.target.value);
    };

    const handleOnClick = (index) => {
        const newItem = [...items]
        newItem.splice(index, 1);
        setItems(newItem);
    };

    const handleDeleteAll = () => {
        setItems([]);
    };
    
    return(
        <div>
            <ListItem items={items} handleOnClick={handleOnClick}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newTask">New Task</label>
                <input id="newTask" type="text" value={value} onChange={changeValue}/>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={handleDeleteAll}>Clear All</button>
        </div>

    );
}