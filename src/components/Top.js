import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Top({setBottomStts}) {
    return (
        <Container>
            <Link to="/" style={{textDecoration:"none"}}>
                <h1 onClick={() => setBottomStts({show: false, title: "", weekday: "", posterURL: "", time: "", date: ""})}>
                    CINEFLEX
                </h1>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    background-color: #c3cfd9;
    width: 100%;
    height: 67px;
    display: flex; 
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: calc(100vw/2 - width/2);
    z-index: 1;

    h1 {
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #e8833a;
    }
`