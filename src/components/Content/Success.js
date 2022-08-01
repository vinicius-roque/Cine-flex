import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success({footerStatus, setFooterStatus, selected}) {
    return (
        <Container>
            <h1>Pedido feito com sucesso!</h1>

            <div>
                <h2>Filme e sessão</h2>
                <h3>{footerStatus.title}</h3>
                <h3>{`${footerStatus.date} ${footerStatus.time}`}</h3>
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
                <button onClick={() => setFooterStatus({show: false, title: "", posterURL: "", weekday: "", date: "", time: ""})}>
                    Voltar pra Home
                </button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    h1 {
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
        color: #293485;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-top: 40px;
    }

    h3 {
        color: #293485;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
    }

    button {
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