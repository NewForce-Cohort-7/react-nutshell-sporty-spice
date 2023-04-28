// This file wil display the form that users will use when they wish to fill out new events.

import { useState} from "react"
import { useNavigate } from "react-router-dom"
import { createEvent } from "../EventsAPIManager"
import { Form, Button } from "react-bootstrap/"



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

// Event form is in react bootstrap formatting
    return (
        <Form> 
            <Form.Group className="mb-3" controlId= "eventForm">
                    <Form.Label>Event Name</Form.Label> 
                    <Form.Control type="text" placeholder="List the name of your event" 
                        value={event.name}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.name = evt.target.value
                                update(copy)}}
                            />
                   </Form.Group>     
                <Form.Group className="mb-3" controlId="eventDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        className="form-control"
                        value={event.date}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.date = evt.target.value
                            update(copy)}}
                                />                              
                              </Form.Group>  
                <Form.Group className="mb-3" controlId="eventLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        className="form-control"
                        value={event.location}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.location = evt.target.value
                            update(copy)}}
                                />                              
                              </Form.Group> 
           
            <Button
            variant="primary"
            type="submit"
            onClick={ (clickEvent) => handleSaveButtonClick(clickEvent)}
            bsPrefix="send-event-button">
                Submit Event
            </Button>
        </Form>
   )
}
                   