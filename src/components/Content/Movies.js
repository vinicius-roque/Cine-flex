import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

export default function Movies({bottomStts}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        request.then(answer => {
            setMovies(answer.data);
        });
    }, []); 

    function Movie({movieId, posterURL, title}) {
        return (
            <Link to={`/sessoes/${movieId}`}>
                <div className='movie' onClick={() => {
                    bottomStts.posterURL = posterURL;
                    bottomStts.title = title;
                }}>
                    <img src={posterURL} alt={title} />
                </div>
            </Link>
        );
    }

    return (
        <div className='movies'>
            <h1>Selecione o filme</h1>
            <div>
                {movies.map(movie => <Movie key={movie.id} movieId={movie.id} title={movie.title} posterURL={movie.posterURL} />)}
            </div>
        </div>
    );
}