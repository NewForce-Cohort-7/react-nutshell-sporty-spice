
//send the user submitted task to the API - TaskForm.js
export const sendTask= (taskSubmitAPI) => {
    return fetch(`http://localhost:8088/tasks`, {
            method: "POST", //replaces data 
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(taskSubmitAPI)
        })
        .then(response => response.json())
}

//get all the tasks -Tasks.js
export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then(response => response.json())
    }


  /*get single task by Id - TasksEdit.js
 export const getTaskById = (id) => {
    return fetch(`http://localhost:8088/tasks/${id}`)
        .then(response => response.json())
}
  

//edit single task - TasksEdit.js
export const editTask = (id) => {
    return fetch (`http://localhost:8088/tasks/${id}`, {
        method: "PUT", //replace data in API (remove Post)
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })
        .then(response => response.json())
       
}

//delete single task - TaskComplete.js
export const deleteTask= (task) => {
    return fetch(`http://localhost:8088/tasks/${task.id}`, {
                method: "DELETE"
            })
}*/