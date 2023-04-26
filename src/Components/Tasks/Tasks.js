// taskObject.js is a child component of TaskList.js

import { Link } from "react-router-dom"
import { deleteTask } from "../TasksApiManager"

export const Ticket = ({ taskObject,  getAllTasks}) => { // all the variables in {} are props being passed down from the parent for us to use here (the child)
      //Delete
const deleteButton = () => {
    return <button onClick={() => {
        deleteTask(task)
            .then(() => {
                navigate("/tasks")

            })
    }} className="ticket__delete">Delete</button>
}

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
    // callback function - for each ticket, return HTML representation; footer is condensed if/else statement
    return <section className="task" key={`task--${taskObject.id}`}>
 <header>
            {
             <Link to={`/tasks/${taskObject.id}/edit`}>Task {taskObject.id}</Link>
            }

        </header>
        <section>To do: {taskObject.toDo}</section>
        <section>Date: {taskObject.dateToComplete}</section>
        <footer>
         
            {
                deleteButton()
            }
        </footer>
    </section>

