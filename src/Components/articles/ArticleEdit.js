import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const ArticleEdit = () => {
    const [article, assignArticle] = useState({
                url: "",
                title: "",
                synopsis: "",
    })
    const { articleId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/articles/${articleId}`)
            .then(response => response.json())
            .then((data) => {
                assignArticle(data)
            })
    }, [articleId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/articles")
            })
    }


    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Article Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Article Title"
                        value={article.title}
                        onChange={
                                (evt) => {
                                        const copy = {...article}
                                        copy.title = evt.target.value
                                        assignArticle(copy)
                                }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Article Synopsis:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Synopsis"
                        value={article.synopsis}
                        onChange={
                                (evt) => {
                                        const copy = {...article}
                                        copy.synopsis = evt.target.value
                                        assignArticle(copy)
                                }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Article URL:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="URL"
                        value={article.url}
                        onChange={
                                (evt) => {
                                        const copy = {...article}
                                        copy.url = evt.target.value
                                        assignArticle(copy)
                                }
                        } />
                </div>
            </fieldset>
            
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Article
            </button>
        </form>
    )
}