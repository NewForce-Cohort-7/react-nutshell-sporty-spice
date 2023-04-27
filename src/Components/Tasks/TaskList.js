//Kathleen Tyner this modual contains the functions to get and set tasks through the API, edit, mark as complete/imcomplete, as well as the JSX 

import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import {getTasks} from "./TasksApiManager"
import "./Tasks.css"

//list out all the products
export const TaskList = (task) => {
    const [ tasks, setTasks ] = useState([])
    const [checked, setChecked] = useState(false);
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
        getTasks()
        .then((taskArray) => {
         setTasks(taskArray)
        })
        })
       }
   
   //complete/incomplete

   
       //checkbox
  
    const finishTask = (taskId) => {
   
      //patch task to finished
return fetch(`http://localhost:8088/tasks/${taskId}`, {
     method: "PATCH",  //like a put but for one property
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({finished: true})//change only one property for a specific object
})
.then(() => {// use this to refresh the state 
  getTasks()//get the tasks
  .then((taskArray) => { // pull from database
   setTasks(taskArray)//changes the state which prints (refreshes without the refresh)
  })
})

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
    <article className="tasks">
    <h1>To-Do List</h1>
    <button className="newTaskButton" onClick={() => navigate("/newtask")}>New Task</button>   
       <section className="tasksToDo">Needs Completed </section>
     {
      tasks.map(
          (task) => {
        if (!task.finished)
      {return <section className="tasklist" key={task.id}>
        <header>
      <Link to={`/tasks/${task.id}/edit`}>{task.task}</Link></header>
           <div>Date: {task.date}</div>
          <div>
      <Checkbox
      label="Done!"
      value={task.finished}
      onChange={() => finishTask(task.id)}/></div>
      <button onClick={() => deleteTask(task.id)}
      className="delete_Button">Delete</button>
      </section>  }})}
     </article>  </>}