//by kathleen tyner. This code presents the form the user will use to enter tasks into the dashboard.

import { useState } from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { sendTask } from "./TasksApiManager"
import "./tasks.css"

export const TaskForm = () => {

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
    sendTask(taskSubmitAPI)
    .then(( )=>  {
        navigate("/tasks") 
    
})
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Task:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={task.task}
                        onChange={ 
                            (event) => {
                            const copy = {...task} //make a copy of the ticket
                            copy.description = event.target.value //look at the state of the ticket description
                            update(copy)
                        } 
                    }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date</label>
                    <input type="text"
                        value={task.dateToComplete}
                        onChange={
                            (event) => {
                                const copy = {...task}
                                copy.dateToComplete= event.target.value //for checkboxes you do not need the value the check is a boolean
                                update(copy)  // send the new state back

                            }
                        } />
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