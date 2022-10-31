import { useReducer, useState } from "react";
import { createContext } from "react";
import { addKey } from "../helpers/funString";
import { custom } from '../helpers/http';

const ArticlesContext = createContext(); //creo el contexto

const initialState={
    dataArticles: null,
    errorFeaturedNews: null,
    errorRecentNews: null,
}
const reducer = (state, action)=>{

    if(action.type==="SET_ARTICLES"){
        if(state.dataArticles!=null){
        let articles = state.dataArticles.concat(action.payload)
        //   articles.map(article => localStorage.setItem(article.key, JSON.stringify(article)))
          return{...state,dataArticles: articles}
        }
        else{
            // let articles = action.payload;
            // articles.map(article => localStorage.setItem(article.key, JSON.stringify(article)))
            return{...state,dataArticles:action.payload};
        } 
    }

    if(action.type==="SET_ERROR"){
        switch(action.payload.category){
            case "recientes":
                return {...state,errorRecentNews: action.payload.response}

            case "destacados":
                return {...state,errorFeaturedNews: action.payload.response}

            default:
                    break;
        }
    }
    return state;
}

 const ArticlesProvider= ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState) 
    
    const getArticles= (url, category)=>{
        let response;
        response= custom()
        .get(url)
        .then((response) => {
            if(!response.error){
                // Guardar datos para concatenar el arreglo y poner un id
                addKey(response.articles);
                dispatch({type:'SET_ARTICLES', payload:response.articles})
                // addKey(response);
                // dispatch({type:'SET_ARTICLES', payload:response});
               
                
            }else{
                const param ={
                    response,
                    category
                }
                dispatch({type:'SET_ERROR', payload: param})
            }
            return response; 
        })
        return response;
    }


    const data={state, getArticles};

    return (
        <ArticlesContext.Provider value={data}>
            {children}
        </ArticlesContext.Provider>
    )
}

export {ArticlesProvider};
export default ArticlesContext;