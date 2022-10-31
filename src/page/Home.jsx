import React, { useContext, useState } from 'react';
import { Header } from '../components/header/Header';
import { Message } from '../components/message/Message';
import './home.css';
import RecentNews from '../components/recentNews/RecentNews';
import FeaturedNews from '../components/featuredNews/FeaturedNews';
import ArticlesContext from '../context/ArticlesContext';
import { useEffect } from 'react';
import InputSearch from '../components/search/InputSearch';

export function Home (){
    const {state} = useContext(ArticlesContext);
    const [filter, setFilter]= useState(null);

    const getValue=(value)=>{
        setFilter(value);
        console.log('en home: '+ value)
    }

    useEffect(()=>{
     localStorage.clear();
    },[])

    return(
        <>
            <Header><InputSearch get={getValue}/></Header>
            <div className='wrapper-home'>
            { state.errorFeaturedNews!=null && state.errorRecentNews!=null 
                ? <Message message={'404'} info={'Por el momento las noticias no se encuentran disponibles.'}/>
                :
                <>
                    <main className='wrapper-news'>
                        <RecentNews valueFilter = {filter}/>
                    </main>
                    <FeaturedNews/>
                </>
            }
        </div>     
        </>
    )
}