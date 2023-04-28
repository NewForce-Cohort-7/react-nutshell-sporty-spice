import { Route, Routes, Outlet } from "react-router-dom"
import { MessageContainer } from "../Messages/MessageContainer"
import { ArticleList } from "../articles/ArticleList"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleEdit } from "../articles/ArticleEdit"
import { EventForm } from "../Events/EventsForm"
import { EventList } from "../Events/EventList"
import { EventEdit } from "../Events/EventEdit"



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
		<Route path="event" element={<EventList/>} />
		<Route path="/event/event/create" element={ <EventForm/> } />
		<Route path="/event/:eventId/edit" element={ <EventEdit/> } />

	<Route path="articles" element={ <ArticleList /> } />
	<Route path="articles/:articleId/edit" element={ <ArticleEdit /> } />
	<Route path="article/create" element={ <ArticleForm /> } />
</Route>
	</Routes>
	
	)
}