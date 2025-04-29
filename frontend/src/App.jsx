import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Product from './pages/Product';

const NotFound = () => {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for could not be found.</p>
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <AppLayout>
                        <Home />
                    </AppLayout>
                } />
                <Route path="/store" element={
                    <AppLayout>
                        <Store />
                    </AppLayout>
                } />
                <Route path="/about" element={
                    <AppLayout>
                        <About />
                    </AppLayout>
                } />
                <Route path="/product" element={
                    <AppLayout>
                        <Product />
                    </AppLayout>
                } />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
