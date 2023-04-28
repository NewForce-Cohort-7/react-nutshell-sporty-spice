import { useNavigate } from "react-router-dom"

export const MessageList = ({message}) => {
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const navigate = useNavigate()
  
    return (
      <>
      <h2>Messages</h2>
        <article className="chats">
          {message.map((messages) => (
            <section className="chat" key={`chat--${messages.id}`}>
                <h4>{messages.user?.username}</h4>

                {messages.description}
                <button
                onClick={() => navigate(`/messages/${messages.id}/edit`)}>edit</button>
            </section>
          ))}
        </article>
      </>
    )
  }
