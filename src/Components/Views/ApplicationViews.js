import { Route, Routes, Outlet } from "react-router-dom"
import { ArticleList } from "../articles/ArticleList"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleEdit } from "../articles/ArticleEdit"
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
</Route>
	</Routes>
	)
}