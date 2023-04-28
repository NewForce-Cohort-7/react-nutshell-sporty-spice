//Kathleen Tyner this modual contains the functions to get and set tasks through the API, edit, mark as complete/imcomplete, as well as the JSX 

import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"

import {getTasks} from "./TasksApiManager"
import "./Tasks.css"

//list out all the products
export const TaskList = (task) => {
    const [ tasks, setTasks ] = useState([])
    const [filteredTasks, setFiltered] = useState([])
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
   
  //checkbox to mark a task complete
  
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

//checkmark to remove task from completed
  
const unfinishTask = (taskId) => {
   
  //patch task to finished
return fetch(`http://localhost:8088/tasks/${taskId}`, {
 method: "PATCH",  //like a put but for one property
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({finished: false})//change only one property for a specific object
})
.then(() => {// use this to refresh the state 
getTasks()//get the tasks
.then((taskArray) => { // pull from database
setTasks(taskArray)//changes the state which prints (refreshes without the refresh)
})
})

}; 

// percent complete


let completedCount = 0
let total = 0
total = tasks.length

completedCount = tasks.filter(task => {
return task.finished
}).length

const percentage = (total > 0) ? (completedCount/total) * 100 : 0




    return <>
    <article className="tasks">
    <h1>My Tasks</h1>
    <button className="newTaskButton" onClick={() => navigate("/newtask")}>New Task</button>   
    <section className="taskcolumn">

       <section className="tasksheader">Needs Completed </section>
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
      </section> }})}</section>
      
      <section className="taskcolumn">

    <section className="tasksheader">Checked Off the List</section>
    <div className="finishedTasks">You've completed {percentage.toFixed(2)}% of your to-do list!</div>
    {
        tasks.map(
            (task) => {
          if (task.finished)
        {return <section className="finishedTasks" key={task.id}>
          <header>
        <Link to={`/tasks/${task.id}/edit`}>{task.task}</Link></header>
             <div>Date: {task.date}</div>
            <div>
        <Checkbox
        label="Opps clicked too soon :("
        value={task.finished}
        onChange={() => unfinishTask(task.id)}/></div>
        <button onClick={() => deleteTask(task.id)}
        className="delete_Button">Delete</button> </section>
            
    }})}
    </section>
     </article>  </>}