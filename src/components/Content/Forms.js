import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

export default function Forms({bottomStts, setBottomStts, selected, setSelected}) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function holdForm(event) {
        event.preventDefault();
        selected.name = name;
        selected.cpf = cpf;
        setSelected = {...selected};
        sendRequest(selected);
    }

    function sendRequest({ids, name, cpf}) {
        const requestAnswer = {ids, name, cpf};
        const request = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', requestAnswer);
        request.then(() => {
            navigate("/sucesso");
            setBottomStts({...bottomStts, show: false});
        });
        request.catch(() => alert("Não deu certo, volte daqui a pouco"));
    }

    return (
        <form className="info" onSubmit={holdForm}>
            <h5>Nome do comprador:</h5>
            <input 
                type="text" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
                required    
            />
            <h5>CPF do comprador:</h5>
            <input 
                type="text" 
                pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                value={cpf} 
                onChange={(event) => setCpf(event.target.value)} 
                required 
            />
            <button>Reservar assento(s)</button>
        </form>
    );
}