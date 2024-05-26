// import { MouseEvent } from "react";

import { useState } from "react"; // mutable

// { items: [], heading: string }
interface Props { // immutable
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // Hook - tap into built-in features of React
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Event handler
    // const handleClick = (event: MouseEvent) => console.log(event);

    const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    };

    const message = getMessage();

    return (
        <>
        <h1>{heading}</h1>
        {message}
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
            <li
                className={ 
                    selectedIndex === index 
                    ? 'list-group-item active' 
                    : 'list-group-item' 
                }
                key={item}
                onClick={() => { 
                    setSelectedIndex(index);
                    onSelectItem(item);
                }}
            >
                {item}
            </li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup;
