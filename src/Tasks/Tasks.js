//Kathleen Tyner this modual contains the functions to get and set tasks through the API, edit, mark as complete/imcomplete, as well as the JSX 

import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"
import "./tasks.css"

//list out all the products
export const TaskList = (task) => {
    const [ tasks, setTasks ] = useState([])
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
    const navigate = useNavigate()
    
    
    //checkbox
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked(!checked);
    };
  
    return (
      <div>
        <Checkbox
          label="checkbox"
          value={checked}
          onChange={handleChange}
        />
      </div>
    );
  };
  
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };
  
   //get all the tasks from the API 
   useEffect(
    () => {
        getTasks()
            .then(tasksArray => {
                setTasks(tasksArray) 
              })
    },
    [] )

   // show the completed tasks
    const tasks = getTasks()
    
    let html = `<ul> `
    const convertFinishedTaskToListElement = (task) => {
        if (task.complete === true) {                    
        return `
        <li class="tasks">    
        Description: ${task.taskDescription}<br>
        Checked Off the List!
        </li>` 
        }
    }
    html+= tasks.map(convertFinishedTaskToListElement ).join("")
    html+= `</ul>`

    return html
}
    
    return <>
        <button onClick={() => navigate("newTask")}>New Task</button>

      <h2>To-Do List</h2>
          <article className="tasks">

            {tasks.sort((a, b) => new Date(a.date) - new Date(b.date))}
       
              return (
                <section className="task" key={task.id}>
                  <div>To Do:{task.task}</div>
                  <div>Date: {task.dateToComplete}</div>
                </section>
              )

</article>    
</>   
}