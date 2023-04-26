import { useEffect, useState } from "react"
import "./articles.css"
import { Navigate, useNavigate } from "react-router-dom"

export const Article = (articleObject, currentUser, getAllArticles) => {
   
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()
    
        return <>
        <h2>Articles</h2>

        <article className="articles">
        <button className="create_Article_Button" onClick={() => navigate("/article/create")}>Create Article</button>
            {
                articles.map(
                    (article) => {
                        return <section className="article">
                            <header>{article.title}</header>
                            <section>Synopsis: {article.synopsis}</section>
                            <section>{article.url}</section>
                            <footer></footer>
                        </section>
                    }
                )
            }
        </article>

    </>
    }
