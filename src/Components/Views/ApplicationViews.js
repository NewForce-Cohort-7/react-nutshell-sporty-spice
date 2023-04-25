import { Route, Routes, Outlet } from "react-router-dom"


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