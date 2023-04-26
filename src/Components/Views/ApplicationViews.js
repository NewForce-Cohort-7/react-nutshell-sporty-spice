import { Route, Routes, Outlet } from "react-router-dom"
import { TaskList } from "../Tasks/TaskList"
import { TaskForm } from "../Tasks/TasksForm"
import { TaskEdit } from "../Tasks/TasksEdit"

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
		<Route path="task/:taskId/edit" element={ <TaskEdit/> } />

</Route>
	</Routes>
	)
}