import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const EventCard = ({id, title, location, type, date}) => {

    return (
        <div className="uk-card uk-card-default uk-card-hover">
        <div className="uk-card-media-top">
            <img src="/images/event1.jpg" width="" height="" alt="" />
        </div>
        <div className="uk-card-body">
            <div className="event-info uk-flex uk-flex-between">
                <div className="event-info__location">{location}</div>
                <div className="event-info__date">{date}</div>
            </div>
            <h4>{title}</h4>
        </div>
        <div className="uk-card-footer uk-flex uk-flex-between">
            <div className="uk-card-footer__people uk-flex uk-flex-middle"><span uk-icon="icon: users; ratio: 0.8" className="uk-icon"></span> 123</div>
            <div className="uk-card-footer__people">{type}</div>
        </div>
    </div>
    )

}

const Events = ({events}) => {
return (
    <div className="events">
    {
        events.map ( (item) => {
            return (<EventCard 
                        key={item.id} 
                        title={item.title} 
                        location={item.location.city} 
                        type={item.event_type.title}
                        date={item.start_date}
                    />)
        })
    }
    </div>
)



}

export default Events;