import { useState} from "react"
import { useNavigate } from "react-router-dom"
import { createEvent } from "../EventsAPIManager"
import { Button } from "react-bootstrap/Button"
import { Form } from "react-bootstrap/Form"



export const EventForm = () => {
    const [event, update] = useState({
        name: "",
        date: "",
        location: ""
 })
const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser) 


const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        console.log("You clicked the  button.")

const sendEventToAPI = {
    userId: nutshellUserObject.id,
    name: event.name,
    date: event.date,
    location: event.location
}

        
 createEvent(sendEventToAPI)
  .then(() => {
    navigate("/event")
  })
  
    }


    return (
        <Form> className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Event name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="List the name of your event"
                        value={event.name}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.name = evt.target.value
                            update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={event.date}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.date = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={event.location}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.location = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
            onClick={ (clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Event
            </button>
        </Form>
   )
}
                   