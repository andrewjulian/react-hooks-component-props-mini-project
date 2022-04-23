import React from "react";
import blogData from "../data/blog";
import Article from "/Users/andrewsm1/Development/code/phase-2/react-hooks-component-props-mini-project/src/components/Article.js"

const posts = blogData.posts;

const articles = posts.map((post)=> {
    return(
        <Article title = {post.title} date = {post.date} preview = {post.preview} />
    )
})

function ArticleList() {
    return(
        <main> 
            {articles}
        </main>
    )
}

export default ArticleList;