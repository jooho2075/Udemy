// Common patterns for updating arrays in state
// 각 object가 장바구니에 담긴 아이템을 나타내는 object array
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.5 }
];

// Adding to an array
[...shoppingCart, {id: 4, product: "Coffee Mug", price: 7.99}];

// Removing an element
shoppingCart.filter((item) => item.id !== 2); // 원본 배열을 바꾸지 않는 방식

// Updating all elements in an array
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    };
});

// Modifying a particular element in an array
shoppingCart.map((item) => {
    if(item.id === 3) {
        return {...item, price: 10.99};
    } else {
        return item;
    }
});