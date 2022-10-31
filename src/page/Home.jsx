import React, { useContext, useState } from 'react';
import { Header } from '../components/header/Header';
import { MessageLoad } from '../components/message/MessageLoad';
import './home.css';
import RecentNews from '../components/recentNews/RecentNews';
import FeaturedNews from '../components/featuredNews/FeaturedNews';
import ArticlesContext from '../context/ArticlesContext';
import { useEffect } from 'react';
import InputSearch from '../components/search/InputSearch';

export function Home (){
    const {state} = useContext(ArticlesContext);
    const [search, setSearch]= useState(null);

    //obtiene valor de la busqueda
    const getSearchValue=(value)=>{
        setSearch(value);
    }

    useEffect(()=>{
     localStorage.clear();
    },[])

    return(
        <>
            <Header><InputSearch getSearchValue={getSearchValue}/></Header>
            <div className='wrapper-home'>
            { state.errorFeaturedNews!=null && state.errorRecentNews!=null 
                ? <MessageLoad message={'404'} info={'Por el momento las noticias no se encuentran disponibles.'}/>
                :
                <>
                    <main className='wrapper-news'>
                        <RecentNews valueSearch = {search}/>
                    </main>
                    <FeaturedNews/>
                </>
            }
        </div>     
        </>
    )
}