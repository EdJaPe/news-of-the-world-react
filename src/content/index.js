import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    // console.log(process.env)
    const [content, setContent] = useState([])
    const [searchNewsResults, setSearchNewsResults] = useState ([])
    const [query, setQuery] = useState('')

    var url = `http://newsapi.org/v2/top-headlines?`+`country=us&`+`apiKey=${process.env.REACT_APP_API_KEY}`
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setContent(res.data)
        })
    }, [] )
    const dynamicSearch = e => {
        setQuery(e.target.value);
        // console.log('🦋',e.target.value)
        
        let filtered = content.articles.filter(article => {
            return article.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearchNewsResults(filtered)
    }
    // console.log('👽',content)

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
            <nav>
                <ul>
                    <Link to="/" ><li>Home</li></Link> 
                    <Link to="/search" ><li>Search</li></Link> 
                    
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" render={()=><Display  content={content}/> }/>
                <Route  path="/search"  render={()=><Landing result={searchNewsResults} search ={dynamicSearch}/> } />
                                         

            </Switch>

               
            </div>
        </Router>
    )
};