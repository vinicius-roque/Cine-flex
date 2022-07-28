import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './Top';
import Movies from './Movies';
import './reset.css';
import './style.css';

export default function App() {
    return(
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    );
}