//Kathleen Tyner this modual contains the functions to get and set tasks through the API, edit, mark as complete/imcomplete, as well as the JSX 

import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"
import {getTasks, deleteTask} from "./TasksApiManager"
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

          <article className="tasks">
                {tasks.map((task) => {
              return <>
              <section className="task" key={task.id}>
                  <div>To Do: {task.task}</div>
                  <div>Date: {task.dateToComplete}</div>
                  <div>
        <Checkbox
          label="Done!"
          value={checked}
          onChange={handleChange}
        />
      </div>
     {deleteButton()}
      <button onClick={() => navigate("/edit")}>Edit</button>


                </section>
                </> 
            })}
</article>    
</>   
}