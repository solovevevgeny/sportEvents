import React from "react";
import Events from "./components/Events";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/events')
        .then((response) => {
            const data = response.data;
            setEvents(data);
        });
    },[setEvents]);

    return (
        
        <div className="uk-container">
            <Events events={events}/>
        </div>
    )
}


export default App;