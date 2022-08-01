import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success({bottomStts, setBottomStts, selected}) {
    return (
        <Container>
            <h1>Pedido feito com sucesso!</h1>

            <div>
                <h2>Filme e sessão</h2>
                <h3>{bottomStts.title}</h3>
                <h3>{`${bottomStts.date} ${bottomStts.time}`}</h3>
            </div>
            <div>
                <h2>Ingressos</h2>
                {selected.seats.map((seat, index) => <h3 key={index}>Assento {seat}</h3>)}
            </div>
            <div>
                <h2>Comprador</h2>
                <h3>Nome: {selected.name}</h3>
                <h3>CPF: {selected.cpf}</h3>
            </div>
            <Link to="/" style={{textDecoration: "none"}}>
                <button onClick={() => setBottomStts({show: false, title: "", posterURL: "", weekday: "", date: "", time: ""})}>
                    Voltar pra Home
                </button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

    h1 {    
        font-family: 'Roboto', sans-serif;
        color: #247A6B;
        width: 100%;
        height: 110px;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        text-align: center;
        margin-top: 40px;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-top: 40px;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
    }

    button {
        font-family: 'Roboto', sans-serif;
        background-color: #E8833A;
        color: #FFFFFF;
        width: 80%;
        height: 43px;
        border-radius: 3px;
        border: none;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 100px auto 0 auto;
        cursor: pointer;
    }

    button:hover {
        background-color: #B3632A;
    }

    button:active {
        transform: translateY(2px);
    }
`