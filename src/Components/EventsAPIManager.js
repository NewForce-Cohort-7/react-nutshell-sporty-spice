export const getAllEvents = () => {
      return fetch(`http://localhost:8088/events`)
        .then(response => response.json()) 
    }
   
    export const getEventForm = (eventObject) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(eventObject)
    })
    .then(() => {
        getAllEvents()
    })
}

export const getEventEdit = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`)
    .then(response => response.json())
 }


 export const saveEventEdit = (event) => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(response => response.json())
        }