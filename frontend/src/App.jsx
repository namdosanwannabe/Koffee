import { useEffect, useState } from 'react';
import './App.css';
import { fetchAllProducts, fetchProductById, fetchProductByCategory } from './services/productService';

function App() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductByCategory('Hot COFfEe');
                console.log("Fetched Products:", data);
                setProducts(data);
                setError("");
            } catch (error) {
                console.error("Error fetching products:", error.name);
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul className='text-red-600'>
                {
                    products?.length > 0 ? (
                        products?.map((product) => (
                            <li key={product._id}>
                                {product.name}
                            </li>
                        ))
                    ) : (
                        <p>{error}</p>
                    )
                }
            </ul>
        </div>
    );
}

export default App;
