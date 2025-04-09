import { useEffect, useState } from 'react';
import './App.css';
import { fetchAllProducts, fetchProductById, fetchProductByCategory } from './services/productService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';

function App() {
    // const [products, setProducts] = useState([]);
    // const [error, setError] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await fetchProductByCategory('Hot COFfEe');
    //             console.log("Fetched Products:", data);
    //             setProducts(data);
    //             setError("");
    //         } catch (error) {
    //             console.error("Error fetching products:", error.name);
    //             setError(error.message);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <AppLayout>
                        <h1>Sample</h1>
                    </AppLayout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
