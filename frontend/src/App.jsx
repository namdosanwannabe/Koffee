import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
