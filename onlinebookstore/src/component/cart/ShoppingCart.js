import React, { useState } from 'react';

function ShoppingCart() {
    // State to store cart items and total price
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    // Function to add item to cart
    const addToCart = (book) => {
      setCartItems([...cartItems, book]);
      setTotalPrice(totalPrice + book.price);
    };
  
    // Function to remove item from cart
    const removeFromCart = (book) => {
      setCartItems(cartItems.filter((item) => item !== book));
      setTotalPrice(totalPrice - book.price);
    };
  
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {/* Display cart items */}
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>Title: {item.title}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        {/* Display total price */}
        <p>Total Price: ${totalPrice}</p>
      </div>
    );
  }

  export default ShoppingCart
  