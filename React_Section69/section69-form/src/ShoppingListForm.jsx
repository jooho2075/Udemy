import { useState } from "react"

function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    });

    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
            [evt.target.name]: evt.target.value
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product: "", quantity: 0});
    };

    return(
        <form onSubmit={handleSubmit}>
            {/* <h1>Product is : {formData.product} And Quantity is : {formData.quantity}</h1> */}
            <label htmlFor="product">Product Name</label><br />
            <input 
                type="text" 
                placeholder="product name" 
                name="product" 
                id="product"
                onChange={handleChange}
                value={formData.product}
            /><br/><br/>
            <label htmlFor="quantity">Quantity</label><br />
            <input 
                type="number" 
                placeholder="0" 
                name="quantity" 
                id="quantity"
                onChange={handleChange}
                value={formData.quantity}
            /><br/>
            <button>Add Item</button>
        </form>
    );
}

export default ShoppingListForm