import { useState, useEffect } from "react"
import { getAllEvents } from "../EventsAPIManager"
import { Event } from "./Events"
import { useNavigate } from "react-router-dom"
import "./Events.css"



export const EventList = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()
   



    useEffect(
        () => {
            getAllEvents()
            .then((eventsArray) => {
                setEvents(eventsArray)
                console.log(eventsArray)
            } ) 
        },
        []

    )
    

    return (
        
        <><div>
            <h2 className="eventsList">Event List</h2>
            <article className="eventList">
                {events.map(event => (
                    <section className="events" key={`event--${event.id}`}>
                        <div>Name: {event?.name}</div>
                        <div>Date: {event?.date}</div>
                        <div>Location: {event?.location}</div>
                    </section>
                ))}
                <button onClick={() => navigate("event/create")}>Create Event</button>
            </article>
        </div></>
    )
  
}





