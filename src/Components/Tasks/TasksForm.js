//by kathleen tyner. This code presents the form the user will use to enter tasks into the dashboard.

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendTask } from "./TasksApiManager"
import Calendar from 'react-calendar'

import "./Tasks.css"

export const TaskForm = () => {

    const [date, onChange] = useState(new Date());


    const [task, update] = useState({
        task: "", 
        dateToComplete: ""
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
        date: task.dateToComplete
    }
   return sendTask()
    .then(( )=>  {
        navigate("/tasks") 
    
})
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="task">Task:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What do you need to do?"
                        value={task?.task}
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
                    <Calendar onChange={onChange} value={task.dateToComplete} />
                 </div>
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}