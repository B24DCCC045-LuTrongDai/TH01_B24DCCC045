            // Bai 3: Gio Hang //
import React, { useState } from "react";

function CartApp() {
    const products = [
        { id: 1, name: 'Sach', price: 10000 },
        { id: 2, name: 'But', price: 20000 },
        { id: 3, name: 'Vo', price: 30000 },
    ];
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h1>Danh sach hang</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)} style={{ marginLeft: 8 }}>Them vao gio</button>
                    </li>
                ))}
            </ul>

            <h2>Shopping Cart</h2>

            <h3>Tong tien: {total}đ</h3>
        </div>
    );
}
export default CartApp;