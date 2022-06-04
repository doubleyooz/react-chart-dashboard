import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const Paths = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Paths;
