import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';

function App() {
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
