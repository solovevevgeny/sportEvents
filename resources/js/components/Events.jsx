import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";



const EventsList = (events) => {
    return (
        <div className="events">
                { events.map((event)=>{
                    <div className="uk-card uk-card-default uk-card-hover">
                    <div className="uk-card-media-top">
                        <img src="./images/event1.jpg" width="" height="" alt="" />
                    </div>
                    <div className="uk-card-body">
                        <div className="event-info uk-flex uk-flex-between">
                            <div className="event-info__location">Санкт-Петербург</div>
                            <div className="event-info__date">01 марта 2024</div>
                        </div>
                        <h4>II Всероссийская спартакиада сильнейших (СПРИНТ)</h4>
                    </div>
                    <div className="uk-card-footer uk-flex uk-flex-between">
                        <div className="uk-card-footer__people uk-flex uk-flex-middle"><span uk-icon="icon: users; ratio: 0.8" class="uk-icon"></span> 123</div>
                        <div className="uk-card-footer__people">Трейлраннинг</div>
                    </div>
                    </div>
                }
        </div>
    )
}

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/events')
        .then((response) => {
            const data = response.data;
            setEvents(data);
        });
    },[setEvents]);

    return EventsList(events);

}

export default Events;