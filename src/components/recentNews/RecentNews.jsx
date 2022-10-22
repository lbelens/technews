import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import ArticlesContext from '../../context/ArticlesContext';
import Loader from '../loader/Loader';
import { MessageLoad } from '../message/MessageLoad';
import CardNews from '../card/CardNews';
import './recentNews.css';
import { formatDate } from '../../helpers/funString';
import { SearchResult } from '../searchResult/SearchResult';

let date= formatDate('yyyy-mm-dd');

function RecentNews({valueSearch}) {
    const url = `https://newsapi.org/v2/everything?q=google OR microsoft OR github OR facebook&language=es&pageSize=13&from=${date.today}&apiKey=ac36fa2e8bc7425d822f7ed292147515`;

    const CATEGORY = "recientes";
    const {getArticles} = useContext(ArticlesContext);
    const [recentNews, setRecentNews]= useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter]=useState(valueSearch);
 
    const getData = async ()=>{
        let response= await getArticles(url, CATEGORY);   
        if(response.error){
            setError(response)
            setLoading(false);
        }else{
            setRecentNews(response.articles);
            setLoading(false);
        }
    }

    const filteredData= recentNews.filter((element)=>{
            if(filter===""){
                return element;
            }else{
                return element.title.toLowerCase().includes(filter);
            }
    })
    
    useEffect(()=>{
        setFilter(valueSearch)
    },[valueSearch])

    useEffect(()=>{
        getData();
    }, [])

    return(
        <>
            <section className='container-recent-news'>
                        <h2 className='title-section'>Noticias recientes</h2>
                        {loading && <Loader/>}
                        { error!=null ? <MessageLoad info={'Por el momento no se pueden mostrar las noticias recientes'}/>
                            : 
                            <div className='wrapper-card-recent-news'>
                                {filter !=null ?
                                     <SearchResult result={filteredData} category={CATEGORY}/>                                
                            
                                    :
                                    recentNews && recentNews.map((data)=>(
                                            <CardNews key={data.key} id={data.key} image={data.urlToImage} title = {data.title} description={data.description} date = {data.publishedAt} category={CATEGORY}/>
                                        ))
                                 }
                            </div>    
                        }
            </section>
        </>
    )
}

export default RecentNews;