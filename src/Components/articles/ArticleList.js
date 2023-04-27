import { useEffect, useState } from "react"
import "./articles.css"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { Article } from "./Article"


export const ArticleList = () => {

    const [articles, setArticles] = useState([])
    const navigate = useNavigate()



    const fetchArticles = () => {
       return fetch(`http://localhost:8088/articles`)
       .then(response => response.json())
       .then((articleArray) => {
            setArticles(articleArray)
       })
       
    //    fetch(`http://localhost:8088/articles?userId=${userId}`)
    //     .then(response => response.json())
    //     .then((articleArray) => {
    //         setArticles(articleArray)
    //     })
    }

    const deleteArticle = (id) => {
       return fetch(`http://localhost:8088/articles/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => {
                fetchArticles(

                )
            })
        }

        // Don't need a return in useEffect but need in functions
    
    useEffect(
        () => {
           fetch(`http://localhost:8088/articles`)
           .then(response => response.json())
           .then((articleArray) => {
                setArticles(articleArray)
           })
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <>
        <h2>Articles</h2>

        <article className="articles">
        <button className="create_Article_Button" onClick={() => navigate("/article/create")}>New Article</button>
        <section className="news_Header">News</section>
            {
                articles.map(
                    (article) => {
                        return <section className="article">
                            <header>
                            <Link to={`/articles/${article.id}/edit`}>{article.title}</Link>
                            </header>
                            <section>Synopsis: {article.synopsis}</section>
                            <section>{article.url}</section>
                            <footer>
                            <button 
                             onClick={() => deleteArticle(article.id)}
                                className="delete_Button">
                                Delete
                            </button>
                            </footer>
                        </section>
                    }
                )
            }
        </article>

    </>
}

