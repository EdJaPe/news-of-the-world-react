import React from 'react';

export const Landing = props => {
    let resultado = props.result.map((resu) => {
        return(
            // console.log('🎃',resu)
            <main> 
            <h3>{resu.title}</h3>
            <img src={resu.urlToImage}/>
            <a href={resu.url}> {resu.url}</a>
            </main>
        )
    })
    return (
        <div>
          <input 
                placeholder="Search for News!" 
                //Note: you can use e to search for event
                onChange={ e => props.search(e) }
            />
            {resultado}
        </div>
    )
};