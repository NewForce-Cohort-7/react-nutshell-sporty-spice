import { Route, Routes, Outlet } from "react-router-dom"
import { MessageContainer } from "../Messages/MessageContainer"
import { ArticleList } from "../articles/ArticleList"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleEdit } from "../articles/ArticleEdit"
import { TaskList } from "../Tasks/TaskList"
import { TaskForm } from "../Tasks/TasksForm"
import { TaskEdit } from "../Tasks/TasksEdit"
import { MessageEdit } from "../Messages/MessageEdit"

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
	<Route path="articles" element={ <ArticleList /> } />
	<Route path="articles/:articleId/edit" element={ <ArticleEdit /> } />
	<Route path="article/create" element={ <ArticleForm /> } />
	<Route path="tasks" element={ <TaskList /> } />
	<Route path="newtask" element={ <TaskForm />} />
	<Route path="tasks/:taskId/edit" element = { <TaskEdit/>} />
	<Route path="/messages" element={<MessageContainer/>} />
	<Route path="messages/:messageId/edit" element={ <MessageEdit /> } />

		</Route>


	</Routes>
	
	)
}