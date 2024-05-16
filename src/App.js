import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projets from './pages/Projets/Projets';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';

function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <Router>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Portfolio_Baya" />} />
                        <Route path="/portfolio_baya" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projets" element={<Projets />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </React.StrictMode>
        </div>
    );
}

export default App;
