import React from 'react';
import "./App.css";
import { BrowserRouter as Router} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import FormPage from './components/FormPage.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<FormPage />} />
            </Routes>
        </Router>
    );
}

export default App;
