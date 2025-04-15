import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <AppLayout>
                        <Home />
                    </AppLayout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
