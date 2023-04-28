import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getEventEdit, saveEventEdit } from "../EventsAPIManager"
import { Form, Button } from "react-bootstrap"

export const EventEdit = () => {
    const [event, updateEvent] = useState({
        name: "",
        date: "",
        location: ""
    })
     const navigate = useNavigate()
     const { eventId } =useParams()
   

    useEffect(() => {
        getEventEdit(eventId)
            .then((data) => {
                updateEvent(data)
                console.log(data)
            })
    }, [eventId])


    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        console.log("you clicked it")
            saveEventEdit(event)
            .then(() => {
                navigate("/event")
            })
    }


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
                                updateEvent(copy)}}
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
                            updateEvent(copy)}}
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
                            updateEvent(copy)}}
                                />                              
                              </Form.Group> 
           
            <Button
            variant="primary"
            type="submit"
            onClick={ (clickEvent) => handleSaveButtonClick(clickEvent)}
            bsPrefix="send-event-button">
                Save Edit
            </Button>
        </Form>
   )
}