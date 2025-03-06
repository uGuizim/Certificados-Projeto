import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Certifique-se de que a URL base está correta
});

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
