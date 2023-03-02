
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Login from './pages/Login';
import Register from './pages/Register';
import WineMeasurements from './pages/WineMeasurements';
const RouterRoutes: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/wineMeasurements" element={<WineMeasurements />} />
                <Route path="*" element={<div>Not Found 404</div>} />
            </Routes>
        </Router>
    )
}

export default RouterRoutes;