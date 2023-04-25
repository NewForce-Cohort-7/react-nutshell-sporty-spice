// import { sendMessages } from "./DataAccess.js";
// const dashboard = document.querySelector("#dashboard")
 

// export const buttonForMessages =() => {
//     let html = `
//     <div>
//     <button id="newMessage">New Message</button>
//     </div>
//     `
//     return html
      
// }

// export const messagesForm =  () => {
//     let html = `
//     <div id="completeMessagesForm" style = "display: none;">
//     <div class="Username">
//     <div><label class="label" for="messageName">Username</label></div>
//     <input type="text" name="messageName" class="input"/>
//     </div>

//     <div class="Message">
//     <div><label class="label" for="messageContent">Message</label></div>
//     <textarea name="messageContent" class="input" rows="4" cols="50"/></textarea>
//     </div>

// <div class ="savebutton>
// <button class="button" id="saveMessage">Save Message</button>
// </div>
// </div>
//     `

//     return html
// }

// dashboard.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveMessage") {
//         // Get what the user typed into the form fields
//         const userName = document.querySelector("input[name='messageName']").value
//         const messageContent = document.querySelector("textarea[name='messageContent']").value
       

//          // Make an object out of the user input
//          const dataToSendToAPI = {
//             name: userName,
//             content: messageContent, 
            
//         }

//         // Send the data to the API for permanent storage
//         sendMessages(dataToSendToAPI)
//         dashboard.dispatchEvent(new CustomEvent("stateChanged"))
//     }
    
//     })


//     dashboard.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id === "newMessage") {
//             console.log("It clicked")
            
//          const messagesForm = document.querySelector("#completeMessagesForm")  
//         messagesForm.style.display = "block"
//             }
//     })


return (
<form className="chatForm">
    <fieldset>
        <label htmlFor="newMessage">New Message</label>
        <input 
            required autoFocus
            type="text"
            className="chat-control"
            placeholder="New Message"
            value={Messages.message}
            OnChange={
                (event) =>{
                    const copy = {...}
                    copy.emergency = event.target.checked
                    update(copy)
                }
            } />
    </fieldset>
</form>
)