import React from "react";
import blogData from "../data/blog";
import About from "/Users/andrewsm1/Development/code/phase-2/react-hooks-component-props-mini-project/src/components/About.js"
import ArticleList from "/Users/andrewsm1/Development/code/phase-2/react-hooks-component-props-mini-project/src/components/ArticleList.js"
import Header from "/Users/andrewsm1/Development/code/phase-2/react-hooks-component-props-mini-project/src/components/Header.js"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image = {blogData.image} about={blogData.about} />
      <ArticleList />
    </div>
  );
}

export default App;
