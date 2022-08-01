import axios from "axios";
import Form from "./Form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

export default function Seats({footerStatus, setFooterStatus}) {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);
    const [selected, setSelected] = useState({ids: [], seats: [], name: "", cpf: ""});
    const subtitle = [{class: "selected", title: "Selecionado"}, {class: "available", title: "Disponível"}, {class: "notAvailable", title: "Indisponível"}];

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        request.then(answer => {
            setSeats(answer.data);
            setFooterStatus({...footerStatus});
        })
    }, []);

    if(seats.length === 0) {
        return (
            <div className="center">
                Carregando...
            </div>
        );
    }

    console.log(selected);

    function Seat({name, id, isAvailable}) {
        switch(isAvailable) {
            case true:
                return (<div className="available" onClick={() => selSeat(name, id, true)}>{name}</div>);
            case false:
                return (<div className="notAvailable" onClick={() => alert("Esse assento está indisponível")}>{name}</div>);
            case "selected":
                return (<div className="selected" onClick={() => selSeat(name, id, "selected")}>{name}</div>);
            default: 
                return (
                    <>Erro!</>
                );
        }
    }

    function selSeat(name, id, status) {
        const indexArr = Number(name) - 1;
        let newSelected = {...selected};

        if(status === true) {
            seats.seats[indexArr].isAvailable = "selected";
            selected.ids.push(id);
            selected.seats.push(name);
        } else {
            seats.seats[indexArr].isAvailable = true;
            newSelected.ids = selected.ids.filter(value => value !== id);
            newSelected.seats = selected.seats.filter(value => value !== name);
        }

        setSeats({...seats});
        setSelected(newSelected);
    }

    return (
        <div className="seats">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats-map">
                {seats.seats.map(seat => <Seat key={seat.id} id={seat.id} name={seat.name} isAvailable={seat.isAvailable} />)}
            </div>
            <div className="seats-legend">
                {legend.map((value, index) =>
                    <div key={index}>
                        <div className={value.class}></div>
                        <h6>{value.title}</h6>
                    </div>
                )}
            </div>
        </div>
    );
}