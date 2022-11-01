import React from 'react';
import CardNews from '../card/CardNews';
import './searchResult.css';

export function SearchResult({result,category}){
    return(
        <>
          {result.length!==0 ?
                result.map((data)=>(
                    <CardNews key={data.key} id={data.key} image={data.urlToImage} title = {data.title} description={data.description} date = {data.publishedAt} category={category}/>
                ))   
            :
              <div className='wrapper-message-notFound'>
                 <p className='text-header'>Lo sentimos, no se encontraron resultados</p>
                 <p className='text-body'> Prueba con otra palabra</p>
              </div>
               
          }
        </>
    )
}