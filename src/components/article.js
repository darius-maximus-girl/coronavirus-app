import React from 'react';

function Article({article}) {

    return (
        <li className="articles__item">
           <p className="articles__item-author" >Author: {article.author}</p>           
           <p className="articles__item-title" >{article.title}</p>
           <img  className="articles__item-img" src={article.urlToImage}></img>
           <p className="articles__item-description" >{article.description}</p>
           <p className="articles__item-content" >{article.content}</p>
           <p className="articles__item-published">{article.publishedAt}</p>
           <a href={article.url} target="blank"><p className="articles__item-link">Go to the article</p></a>
        </li>
    );
}

export default Article;