import { useEffect, useState } from 'react';
import './App.css';
import { getAllProducts, getProductById } from './services/productService';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProducts();
                console.log("Fetched Products:", data);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
