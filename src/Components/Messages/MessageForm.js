import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { ChatList } from "./MessageList.js"
// import "/.Messages.css"

export const MessageForm = ({updateMessages}) => {
    
    const [message, update] = useState({
        description: ""
    })

    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)


const handleSaveButtonClick = (event) => {
    event.preventDefault()
    

    // TODO: Create the object to be saved to the API


    const chatToSendToAPI = {
        userId:nutshellUserObject.id, 
        description: message.description
    }
 

    // TODO: Perform the fetch() to POST the object to the API
     fetch (`http://localhost:8088/messages`, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(chatToSendToAPI)
    })
    .then (()=>fetch(`http://localhost:8088/messages`))
    .then(response => response.json())
    .then((messageArray) => { updateMessages(messageArray) })

    
}


return (
<form className="chatForm">
    <fieldset>
    <h2>Messages</h2>
    {/* <ChatList /> */}
        <input 
            required autoFocus
            type="text"
            className="chat-control"
            placeholder="New Message"
            value={message.message}
            onChange={
                (event) =>{
                    const copy = {...message}
                    copy.description = event.target.value
                    update(copy)
                }
            } />
    </fieldset>
    <button
    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
        Post Chat
     </button>
</form>
)
}