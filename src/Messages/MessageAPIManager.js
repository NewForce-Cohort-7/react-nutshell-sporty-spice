export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
}

export const sendMessages = (newUserMessage) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserMessage)
    }


    return fetch(`${API}/messages`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteMessage = (id) => {
    return fetch(`${API}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
