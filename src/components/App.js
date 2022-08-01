import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Top from './Top';
import Movies from './Content/Movies';
import Seats from './Content/Seats';
import Sessions from './Content/Sessions';
import Success from './Content/Success';
import Footer from './Footer';

export default function App() {
    const [footerStatus, setFooterStatus] = useState({show: false, title: "", posterURL: "", weekday: "", date: "", time: ""});

    return(
        <Container>
            <BrowserRouter>
                <Top setFooterStatus={setFooterStatus}/>
                <Routes>
                    <Route path="/" element={<Movies footerStatus={footerStatus}/>} />
                    <Route path="/sessoes/:idFilme" element={<Sessions footerStatus={footerStatus} setFooterStatus={setFooterStatus}/>} />
                    <Route path="/assentos/:idSessao" element={<Seats footerStatus={footerStatus} setFooterStatus={setFooterStatus}/>} />
                    <Route path="/sucesso" element={<Success setFooterStatus={setFooterStatus}/>} />
                </Routes>
                <Footer footerStatus={footerStatus}/>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    background-color: #f3f3f3;
    width: 100%;
    min-width: 307px;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-top: 67px;
    padding-bottom: 117px;
    margin: 0 auto;
`