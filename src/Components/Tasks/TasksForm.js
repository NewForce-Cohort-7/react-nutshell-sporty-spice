//by kathleen tyner. This code presents the form the user will use to enter tasks into the dashboard.

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendTask } from "./TasksApiManager"


import "./Tasks.css"

export const TaskForm = () => {


    const [task, update] = useState({
        task: "", 
        date: "",
        finished: false
    })
  
    const navigate = useNavigate()
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const taskSubmitAPI = {//Create the task object to be saved to the API
       //primary key, id, is set by server
        userId: nutshellUserObject.id,
        task: task.task,
        date: task.date,
        finished: false
    }
   return sendTask(taskSubmitAPI)
    .then(( )=>  {
        navigate("/tasks") 
    
})
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="toDo">Task:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What do you need to do?"
                        value={task.task}
                        onChange={ 
                            (event) => {
                            const copy = {...task} 
                            copy.task = event.target.value 
                            update(copy)
                        } 
                    }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label><div>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={task.date}
                        onChange={ 
                            (event) => {
                            const copy = {...task} 
                            copy.date = event.target.value 
                            update(copy)
                        } 
                    }/>
                 </div>
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="taskButton">
                Submit
            </button>
        </form>
    )
}