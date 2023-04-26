//Kathleen Tyner this modual contains the functions to get and set tasks through the API, edit, mark as complete/imcomplete, as well as the JSX 

import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import {getTasks} from "./TasksApiManager"
import "./Tasks.css"

//list out all the products
export const TaskList = (task) => {
    const [ tasks, setTasks ] = useState([])
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
    const navigate = useNavigate()
    
    //get the tasks from the API
    useEffect(
      () => {
         getTasks()
         .then((taskArray) => {
          setTasks(taskArray)
         })
      },
      []
  )    

//delete
const deleteTask = (id) => {
  return fetch(`http://localhost:8088/tasks/${id}`, {
       method: "DELETE"
   })
       .then(response => response.json())
       .then(() => {
          setTasks()})
       }
    //checkbox
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked(!checked)
    }
    const Checkbox = ({ label, value, onChange }) => {
      return (
        <label>
          <input type="checkbox" checked={value} onChange={onChange} />
          {label}
        </label>
      );
    };
    return <>

    <h2>To-Do List</h2>
    <button onClick={() => navigate("/newtask")}>New Task</button>

        <section className="tasks"> My Task List </section>
              {tasks.map((task) => {
            return <>
            <section className="task" key={task.id}>
            <Link to={`/tasks/${task.id}/edit`}>{task.toDo}</Link>
                <div>To Do: {task.task}</div>
                <div>Date: {task.dateToComplete}</div>
                <div>
      <Checkbox
        label="Done!"
        value={checked}
        onChange={handleChange}
      />
    </div>
    <button onClick={() => deleteTask(task.id)}
    className="delete_Button">Delete</button>
    <button onClick={() => navigate("/edit")}>Edit</button>


              </section>
              </> 
          })}
</>}



    