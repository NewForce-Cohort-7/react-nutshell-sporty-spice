import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getEventEdit, saveEventEdit } from "../EventsAPIManager"


export const EventEdit = () => {
    const [event, assignEvent] = useState({
        name: "",
        date: "",
        location: ""
    })
    const { eventId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getEventEdit(eventId)
            .then((data) => {
                assignEvent(data)
            })
    }, [eventId])

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()

       saveEventEdit
            .then(() => {
                navigate("/event")
            })
    }


    return <form className="eventForm">
    <h2 className="eventForm__title">New Event!</h2>
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
                    assignEvent(copy)
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
                        assignEvent(copy)
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
                        assignEvent(copy)
                    }
                } />
        </div>
    </fieldset>
    <button
    onClick={ (clickEvent) => handleSaveButtonClick(clickEvent)}
    className="btn btn-primary">
        Save Edit
    </button>
    </form>
}