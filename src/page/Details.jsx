import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import  imgDefault from '../assets/img/img_error_loading.svg';
import './details.css';
import FeaturedNews from '../components/featuredNews/FeaturedNews';
import Loader from '../components/loader/Loader';

export function Details (){

const data = useLocation();
const [article, setArticle] = useState(null);
const [loading, setLoading] = useState(true);

const getArticle= ()=>{
    let dataArticle = JSON.parse(localStorage.getItem(data.state.id))
    setArticle(dataArticle) 
    setLoading(false)
    console.log(dataArticle)
}

  
   useEffect(()=>{
    console.log("useEffect data")
    window.scrollTo(0, 0);
    getArticle();
    console.log(localStorage.length)
   },[data])


return(
        <>
          
          
            {loading && <Loader/>}

            {
                article &&
                    <div className='wrapper-details'>
                        <main className='wrapper-news'>
                            <h1 className='title-details'>{article.title}</h1>
                            <div className='info-details'>
                                {article.author && <p> Autor: {article.author}</p>}
                                <p>Fecha de publicación: {new Date(article.publishedAt).toLocaleDateString("es-MX")}</p>
                            </div>
                            <img src={article.urlToImage==="" || article.urlToImage===null ? imgDefault : article.urlToImage} alt='imagen'></img>

                            <p>{article.content} <a href={article.url} target="_blank" rel='noreferrer'>...Ver todo</a></p>
                            <br></br>
                            <br></br>
                        </main>
                        <FeaturedNews/> 
                    </div>
            }

        </>
    )
}

