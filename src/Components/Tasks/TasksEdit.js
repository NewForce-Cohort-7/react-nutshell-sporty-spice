//by Kathleen Tyner. Modual with functions to mark taks complete/incomplete, edit and delete.

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const TaskEdit = () => {
    const [task, setTask] = useState({task: "", date: ""})
    const { taskId } = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
      fetch(`http://localhost:8088/tasks/${taskId}`) //route param
          .then(response => response.json())
          .then((data) => {
              setTask(data) 
          })
  }, [taskId]) //watch ticket state - param
  const handleSaveButtonClick = (event) => {
    event.preventDefault()

    return fetch(`http://localhost:8088/tasks/${task.id}`, {
        method: "PUT", //replace data in API (remove Post)
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then(() => {
            navigate("/tasks") //sends user back to tickets
        })
}


  
    return (
      <form className="taskEdit">
        <h2 className="task_Title">Edit Task</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="toDo">To Do: </label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Edit Task"
              value={task.task}
              onChange={(event) => {
                const copy = {...task}
                copy.task = event.target.value
                setTask(copy)
              }}
            />
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
                            setTask(copy)
                        } 
                    }/>
                 </div>
                </div>
            </fieldset>

        <button
          onClick={(evt) => handleSaveButtonClick(evt)}
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    )
  }
  