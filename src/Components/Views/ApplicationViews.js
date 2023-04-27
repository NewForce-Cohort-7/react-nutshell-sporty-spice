import { Route, Routes, Outlet } from "react-router-dom"
import { MessageForm } from "../Messages/MessageForm.js"
import { MessageList } from "../Messages/MessageList.js"
// import "/.Messages.css"


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
{/* <Route path="/messages" element={<ChatList MessageBoard/>} /> */}
<Route path="/messages" element={<><MessageForm/> <MessageList/></>} />

	</Routes>
	
	)
}