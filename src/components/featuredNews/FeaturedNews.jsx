import React from 'react';
import Loader from '../loader/Loader';
import { MessageLoad } from '../message/MessageLoad';
import CardNews from '../card/CardNews';
import { useEffect } from 'react';
import { useContext } from 'react';
import {useState } from 'react';
import ArticlesContext from '../../context/ArticlesContext';
import './feauturedNews.css';

const url = "http://192.168.100.11:3005/destacados";

export default function FeaturedNews() {
    // const url = 'https://newsapi.org/v2/top-headlines?category=science&language=es&pageSize=10&apiKey=ac36fa2e8bc7425d822f7ed292147515';
    const CATEGORY= "destacados";
    const {getArticles} = useContext(ArticlesContext);
    const [featuredNews, setfeaturedNews]=useState();
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getArticle = async ()=>{
        let response= await getArticles(url,CATEGORY); 
        if(response.error){
            setError(response)
            setLoading(false);
        }else{
            // setfeaturedNews(response)
            setfeaturedNews(response.articles)
            setLoading(false);
        }
    }

    useEffect(()=>{
        getArticle();
    }, [])

    return(
        <>
           <aside className='container-featured-news'>
                        <h2 className='title-section'>Destacados</h2>
                        {loading && <Loader/>}
                        { error!==null ? <MessageLoad info={'Por el momento no se pueden mostrar las noticias destacadas.'}/>
                        :
                            <div className='wrapper-card-featured-news'>
                            {featuredNews && featuredNews.map((data)=>(
                                    <CardNews key ={data.key} id={data.key} image={data.urlToImage} title = {data.title} description={data.description} date = {data.publishedAt} category={CATEGORY}/>
                            ))}
                            </div> 
                        }
            </aside>
        </>
    )
};
