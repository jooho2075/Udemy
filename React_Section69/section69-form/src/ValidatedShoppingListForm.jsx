import { useState } from "react"

function ValidatedShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    });

    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if(product.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    };

    const handleChange = (evt) => {
        if(evt.target.name === "product") {
            validate(evt.target.value);
        }
        setFormData(currData => {
            return {
                ...currData,
            [evt.target.name]: evt.target.value
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(productIsValid) {
            addItem(formData);
            setFormData({product: "", quantity: 0});
        }
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
            {!productIsValid && (
                <p style={{color: "red"}}>Product's name cannot be empty</p>
            )}
            <label htmlFor="quantity">Quantity</label><br />
            <input 
                type="number" 
                placeholder="0" 
                name="quantity" 
                id="quantity"
                onChange={handleChange}
                value={formData.quantity}
            /><br/>
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    );
}

export default ValidatedShoppingListForm;