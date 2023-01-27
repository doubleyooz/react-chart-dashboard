import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

const Paths = () => {
    return (
        <div className='bg-skin-default pt-3 px-6'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Paths;
