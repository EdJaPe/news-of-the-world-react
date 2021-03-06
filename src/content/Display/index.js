import React from 'react';

export const Display = props => {

    let content = props.data ? '' : 'Ruh-Roh! API or props fail!';
    let title
    if (props.content.length != 0) {
        title = props.content.articles.map((article, i) => {
            return(
                <li key ={i}>
                    
                    <h2>{article.title}</h2>
                    <br></br>
                    <img src={article.urlToImage}/>
                    <h5>by {article.author}</h5>
                </li>
            )
        })
    }
    return (
        <div>
        {title}
            <p>{content}</p>
            
        </div>
    )
};