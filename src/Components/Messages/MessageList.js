import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const MessageList = () => {
    const [message, update] = useState([])
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    useEffect(() => {
      fetch(`http://localhost:8088/messages`)
        .then(response => response.json())
        .then((messageArray) => { update(messageArray) })
    }, [])
  
    return (
      <>
        <article className="chats">
          {message.map((messages) => (
            <section className="chat" key={`chat--${messages.id}`}>
                {messages.description}              
            </section>
          ))}
        </article>
      </>
    )
  }
