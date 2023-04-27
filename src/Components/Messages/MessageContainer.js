import { MessageForm } from "./MessageForm.js"
import { MessageList } from "./MessageList.js"
import { useState, useEffect } from "react"

export const MessageContainer = () => {

    const [message, update] = useState([])


    useEffect(() => {
        fetch(`http://localhost:8088/messages?_expand=user`)
          .then(response => response.json())
          .then((messageArray) => { update(messageArray) })
      }, [])
  
    return (
        <>
            <MessageForm  updateMessages={update}/>
            <MessageList message={message}  />
        </>
    )
}
