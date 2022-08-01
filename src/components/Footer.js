import styled from "styled-components";

export default function Footer({footerStatus}) {
    let {show, title, posterURL, weekday, time} = footerStatus

    if(show === true) {
        return (
            <Container>
                <Poster>
                    <img src={posterURL} alt={title} />
                </Poster>
                <TextInfo>
                    <h3>{title}</h3>
                    
                    {weekday !== ''?
                    <h3>{`${weekday} - ${time}`}</h3> :
                    <></>
                    }
                </TextInfo>
            </Container>
        );
    }

    return (
        <></>
    );
}

const Container = styled.div`
    background-color: #DFE6ED;
    width: 100%;
    height: 117px;
    border: 1px solid #9eadba;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: calc(100vw/2 - width/2);
    z-index: 1;
`
const Poster = styled.div`
    background: #FFFFFF;
    width: 64px;
    height: 89px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    img {
        width: 48px; 
        height: 72px;
        margin: auto;
    }
`
const TextInfo = styled.div`
    margin-left: 15px;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
`