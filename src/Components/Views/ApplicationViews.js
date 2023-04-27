import { Route, Routes, Outlet } from "react-router-dom"
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

</Route>
	</Routes>
	)
}