import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const EventDetail = ({eventId}) => {


  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/event/'+eventId)
    .then((response) => {
        const data = response.data;
        setEvent(data);
    });
},[setEvent]);

  return (
    <div className="uk-container">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>

    
  )
}

export default EventDetail;