import { useState } from "react";
import { v4 as uuid } from "uuid";
// import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

function ShoppingList() {
    const [items, setItems] = useState([
        {id: uuid(), product: "Bananas", quantity: 8},
        {id: uuid(), product: "Apples", quantity: 9}
    ]);

    const addItem = (item) => { // item이라는 객체로 하는 방법
        setItems(currItems => {
            return [...currItems, {...item, id: uuid() }];
        });
    };

    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem}/>
        </div>
    )
}

export default ShoppingList;