import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ArticleForm = () => {
    
        const [article, updateArticle] = useState({
                title: "",
                synopsis: "",
                url: ""
        })

        const navigate = useNavigate()
    

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        const articleToSendToAPI = {
                userId: nutshellUserObject.id,
                url: article.url,
                title: article.title,
                synopsis: article.synopsis,
                dateCreated: new Date()
        }

        return fetch(`http://localhost:8088/articles`, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(articleToSendToAPI)
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
                                        updateArticle(copy)
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
                                        updateArticle(copy)
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
                                        updateArticle(copy)
                                }
                        } />
                </div>
            </fieldset>

            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Article
            </button>
        </form>
    )
}