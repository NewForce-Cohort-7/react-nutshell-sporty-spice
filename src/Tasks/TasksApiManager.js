//TaskForm API Export. Allows the user to enter a task. Data collected will ve stored in the API.

export const sendTask= (taskSubmitAPI) => {
    return fetch(`http://localhost:8088/tasks`)
        , {
            method: "PUT", //replaces data 
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(taskSubmitAPI)
        }
    }
//get all the tasks -Tasks.js
export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then(response => response.json())
    }