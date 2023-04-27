import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const MessageList = ({message}) => {
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

  
    return (
      <>
        <article className="chats">
          {message.map((messages) => (
            <section className="chat" key={`chat--${messages.id}`}>
                {messages.user?.username}
                
                {messages.description}
            </section>
          ))}
        </article>
      </>
    )
  }
