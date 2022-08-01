import './style.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Sessions({footerStatus, setFooterStatus}) {
    const [sessions, setSessions] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        request.then(answer => {
            setSessions(answer.data);
            setFooterStatus({...footerStatus, show: true});
        })
    }, []);

    if(sessions.length === 0) {
        return (
            <div className='center'>
                Carregando...
            </div>
        );
    }

    function ShowTime({name, sessionId, weekday, date}) {
        return (
            <Link to={`/assentos/${sessionId}`} style={{textDecoration: "none"}}>
                <div className='button-showtime' onClick={() => {
                    footerStatus.time = name;
                    footerStatus.weekday = weekday;
                    footerStatus.date = date;
                }}>{name}</div>
            </Link>
        );
    }

    function Days({showtimes, weekday, date}) {
        return (
            <div>
                <h2>{`${weekday} - ${date}`}</h2>
                <div className='buttons-showtime'>
                    {showtimes.map((showtime => <ShowTime
                        key={showtime.id}
                        sessionId={showtime.id}
                        name={showtime.name} 
                        weekday={weekday}
                        date={date} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='sessions'>
            <h1>Selecione o horário</h1>
            {sessions.days.map(day => <Days key={day.id} showtimes={day.showtimes} date={day.date} weekday={day.weekday} />)}
        </div>
    );
}