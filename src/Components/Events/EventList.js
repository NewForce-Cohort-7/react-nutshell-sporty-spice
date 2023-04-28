import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Events.css"
import { getEvents } from "../EventsAPIManager"



export const EventList = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()
   



    useEffect(
        () => {
            getEvents()
            .then((events) => {
                setEvents(events)
                console.log(events)
            }
             ) 
        },
        []

    )
    

    return <>
        
        
        <div>
            <h2>Event List</h2>
            <button onClick={() => navigate("event/create")}>Create Event</button>
            
            <article className="events">
                {
                events.map(
                    (event) => (
                    <section className="eventCard" key={`event--${event.id}`}>
                        <div>Name: {event?.name}</div>
                        <div>Date: {event?.date}</div>
                        <div>Location: {event?.location}</div>
                        <button onClick={() => navigate(`/event/${event.id}/edit`)}>Edit</button> 
                    </section>
                    // line 44 needed to call the specific event id so that the button is with each established one
                ))}
                
            </article>
       </div> </>
    
  
}





