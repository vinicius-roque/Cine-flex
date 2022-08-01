import axios from "axios";
import Forms from "./Forms";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

export default function Seats({setBottomStts, bottomStts, selected, setSelected}) {

    const { idSessao } = useParams();

    const[seats, setSeats] = useState([]);

    const subtitle = [{class:'selected', title:'Selecionado'}, {class:'available', title:'Disponível'}, {class:'notAvailable', title:'Indisponível'}];

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        request.then(answer => {
            setBottomStts({...bottomStts});
            setSeats(answer.data);
        })
    }, []);

    if(seats.length === 0) {
        return(
            <div className='loading'>Loading...</div>
        );
    }

    function Seat({ isAvailable, name, id }) {

        switch (isAvailable) {
            case true:
                return (<div className="available" onClick={() => selectSeat(name, id, true)}>{name}</div>);
            case false:
                return (<div className="notAvailable" onClick={() => alert('Esse assento está indisponível!')}>{name}</div>);
            case 'selected':
                return (<div className="selected" onClick={() => selectSeat(name, id, 'selected')}>{name}</div>);
            default:
                return(<>Erro!</>);
        }
    }

    function selectSeat(name, id, status){
 
        const indexArr = Number(name) - 1;

        let newSelected = {...selected}

        if (status === true){

            seats.seats[indexArr].isAvailable = 'selected';

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

    return(
        <div className="seats">
            <h1>Selecione o(s) assento(s)</h1>

            <div className="seatsMap">
                
                {seats.seats.map(seat => <Seat key={seat.id} id={seat.id} name={seat.name} isAvailable={seat.isAvailable}/>)}

            </div>

            <div className="seatsSubtitle">

                {subtitle.map((value, index) => 
                    <div key={index}>
                        <div className={value.class}></div>
                        <h6>{value.title}</h6>
                    </div>
                )}

            </div>

            <Forms selected={selected} setSelected={setSelected} bottomStts={bottomStts} setBottomStts={setBottomStts}/>
            
        </div>
    )
}