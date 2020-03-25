import React, {useState, useEffect} from 'react';
import Article from './article';

let apiKey = process.env.REACT_APP_API_KEY;
let api= `http://newsapi.org/v2/top-headlines?q=coronavirus&language=en&pageSize=50&apiKey=${apiKey}`;

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(api)
          .then(response => {
            return response.json();
          })
          .then(data => {
            let articles = Object.values(data);
            setNews(articles[2]);
          });
      }, []);
    
      useEffect(() => {
        console.log(news)
      }, [news])

    return (
        <div className="news-container">
            <ul className="articles">
                {news.map((article, key) => {
                    return <Article key={key} article={article} />
                })}
            </ul>
        </div>
    );
}

export default News;