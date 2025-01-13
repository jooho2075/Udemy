import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({items}) {
    return(
        <ul>
            {items.map((i) => (
                <ShoppingListItem
                    key={i.id}
                    item={i.item} 
                    quantity={i.quantity} 
                    completed={i.completed}
                />
                // 전개연산자 , 위와 같은 의미
                //<ShoppingListItem key={i.id} {...} />
            ))}
        </ul>
    );
}

export default ShoppingList;