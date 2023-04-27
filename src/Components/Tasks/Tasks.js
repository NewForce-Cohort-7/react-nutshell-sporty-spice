// taskObject.js is a child component of TaskList.js

/*import { Link } from "react-router-dom"
import { useState, useNavigate } from "react"

export const Ticket = ({ taskObject,  getAllTasks}) => { // all the variables in {} are props being passed down from the parent for us to use here (the child)
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
            method: "PUT", //Method is PUT because we are updating the data
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(copy) //Making a copy and turning it into a string
        })
            .then(response => response.json())
            .then(getAllTasks)
    }

    return <>

    <h2>To-Do List</h2>
    <button onClick={() => navigate("/newtask")}>New Task</button>

        <article className="tasksToDo">
              {tasks.map((task) => {
            return <>
            <section className="task" key={task.id}>
                <div>To Do: {task.task}</div>
                <div>Date: {task.date}</div>
                <div>
      <Checkbox
        label="Done!"
        value={checked}
        onChange={handleChange}
      />
    </div>
    <button onClick={() => deleteTask(task.id)}
    className="delete_Button">Delete</button>


              </section>
              </> 
          })}
</article>    
</>   
*/
