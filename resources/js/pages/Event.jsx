import React from 'react'
import { useParams } from 'react-router-dom';
import Header from './layouts/Header';

import EventDetail from '../components/EventDetail';

const Event = () => {
  const params = useParams();

  return (
    <>
    <Header />
    <div className="uk-container">
      <EventDetail eventId={params.eventId} />
    </div>
    </>
    
  )
}

export default Event;