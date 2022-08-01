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
    const [bottomStts, setBottomStts] = useState({show: false, title: "", posterURL: "", weekday: "", date: "", time: ""});
    const [selected, setSelected] = useState({ids: [], seats: [], name: "", cpf: ""});

    return(
        <Container>
            <BrowserRouter>
                <Top setBottomStts={setBottomStts}/>
                <Routes>
                    <Route path="/" element={<Movies bottomStts={bottomStts}/>} />
                    <Route path="/sessoes/:idFilme" element={<Sessions bottomStts={bottomStts} setBottomStts={setBottomStts}/>} />
                    <Route path="/assentos/:idSessao" element={<Seats bottomStts={bottomStts} setBottomStts={setBottomStts} selected={selected} setSelected={setSelected} />} />
                    <Route path="/sucesso" element={<Success bottomStts={bottomStts} setBottomStts={setBottomStts} selected={selected} />} />
                </Routes>
                <Footer bottomStts={bottomStts}/>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    background-color: #ffffff;
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