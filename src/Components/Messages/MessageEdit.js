import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const MessageEdit = () => {

    const [message, assignMessage] = useState({
        description: "",
    })

const { messageId } = useParams()
const navigate = useNavigate()

useEffect(() => {
    fetch(`http://localhost:8088/messages/${messageId}`)
        .then(response => response.json())
        .then((data) => {
            assignMessage(data)
        })
    }, [messageId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/messages")
            })
    }

       return <form className="chatForm">
            <fieldset>
                <input 
                    required autoFocus
                    type="text"
                    placeholder={message.description}
                    className="chat-control"
                    value={message.message}
                    onChange={
                        (event) =>{
                            const copy = {...message}
                            copy.description = event.target.value
                            assignMessage(copy)
                        }
                    } />
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Edit
            </button>
        </form>
}
