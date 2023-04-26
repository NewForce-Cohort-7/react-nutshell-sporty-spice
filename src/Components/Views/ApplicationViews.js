import { Route, Routes, Outlet } from "react-router-dom"
import { ArticleList } from "../articles/ArticleList"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleEdit } from "../articles/ArticleEdit"

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
</Route>
	</Routes>
	)
}