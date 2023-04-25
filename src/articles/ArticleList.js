import { useEffect, useState } from "react"

export const ArticleList = () => {

    const [articles, setArticles] = useState([])

    useEffect(
        () => {
            console.log("Initial state of articles", articles) // View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <h2>Articles</h2>
}

