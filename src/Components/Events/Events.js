import { getAllEvents } from "../EventsAPIManager"

export const Event = ({name, date, location}) => {
    return <section className="events" >
        <div>Name: {name}</div>
        <div>Date: {date}</div>
        <div>Location: {location}</div>
    
</section>
}

// this is set up like honey rae's employee.js
// event list and future updates also need to be displayed way in the return



