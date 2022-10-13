import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArticlesContext from '../context/ArticlesContext';
import  imgDefault from '../assets/img/img_error_loading.svg';
import './details.css';
import FeaturedNews from '../components/featuredNews/FeaturedNews';
import { custom } from '../helpers/http';
import { FiDatabase } from 'react-icons/fi';

export function Details (){
    const {getArticles} = useContext(ArticlesContext);
    const data = useLocation();
    const [article, setArticle] = useState();

    // let article = JSON.parse(localStorage.getItem(data.state.id));
    let url = data.state.category === "recientes" ? `https://newsapi.org/v2/everything?q="${data.state.title}"&apiKey=ac36fa2e8bc7425d822f7ed292147515` : 'https://newsapi.org/v2/top-headlines?category=science&language=es&pageSize=10&apiKey=ac36fa2e8bc7425d822f7ed292147515';

   console.log(data)

   const getArticle= async()=>{
        localStorage.clear();
        let response =  await custom()
        .get(url)
        .then((response)=>
           response
        )
        if(!response.error){
            console.log(response.articles[0]);
            setArticle(response.articles[0]);
        }else{
            console.log(response)
        }
   }

  


   useEffect(()=>{
    window.scrollTo(0, 0);
    getArticle()
   },[data])


    return(
        <>
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
        </>
    )
}

{/* <div className='wrapper-details'>
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
</div> */}
