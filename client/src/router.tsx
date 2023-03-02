
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CheckUserAuthentication from './components/CheckUserAuthentication/CheckUserAuthentication';
import PagePaths from './page-paths';
const RouterRoutes: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path={PagePaths.LOGIN} element={<Login />} />
                <Route path={PagePaths.REGISTER} element={<Register />} />
                <Route path={PagePaths.HOME} element={<Home />} />
                <Route path="*" element={<CheckUserAuthentication />} />
            </Routes>
        </Router>
    )
}

export default RouterRoutes;