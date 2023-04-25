import { Route, Routes, Outlet } from "react-router-dom"
import { TaskList } from "../Tasks/Tasks"
import {TaskForm } from "../Tasks/TasksForm"


export const ApplicationViews = () => {
	return ( 
	<Routes>
<Route path="/" element={
<>

	<h2> Welcome to NutShell</h2>
	<div>We got it all</div>
	<Outlet />
	</>
	
}>

		<Route path="tasks" element={ <TaskList /> } />
		<Route path="newtask" element={ <TaskForm /> } />

</Route>
	</Routes>
	)
}