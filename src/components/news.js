import React, { useState, useEffect } from "react";
import Article from "./article";
import Loader from "react-loader-spinner";

let apiKey = process.env.REACT_APP_API_KEY;
let api = `http://newsapi.org/v2/top-headlines?q=coronavirus&language=en&pageSize=50&apiKey=${apiKey}`;

function News() {
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let articles = Object.values(data);
        setNews(articles[2]);
        setLoader(false)
      });
  }, []);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="news-wrapper">
    <Loader className={loader ? "loader" : "disappear"} type="Grid" color="#c346e9" height={50} width={50}/>
    <div className={loader ? "disappear" : "news-container"}>
      <ul className="articles">
        {news.map((article, key) => {
          return <Article key={key} article={article} />;
        })}
      </ul>
    </div>
    </div>
  );
}

export default News;
