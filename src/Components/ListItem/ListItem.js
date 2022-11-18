import "./ListItem.css";
import { useState } from "react";

export function ListItem() {
    const [items, setItems] = useState(["Test"]);

    const handleSubmit = ({target}) => {
        setItems((prev) => {
            [...prev, target]
        });
    };
    
    return(
        <div>
            <ul>
                {items}
            </ul>

            <form onSubmit={handleSubmit}>
                <label htmlFor="newTask">New Task</label>
                <input id="newTask" type="text"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}