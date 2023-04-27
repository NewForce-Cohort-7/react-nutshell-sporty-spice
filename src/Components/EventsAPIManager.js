export const getEvents = () => {
      return fetch(`http://localhost:8088/events?_expand=user`)
        .then(response => response.json()) 
    }
   
    export const createEvent = (sendEventToAPI) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(sendEventToAPI)
    })
    .then(response => response.json())}


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


    