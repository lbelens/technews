/*

https://newsapi.org/v2/everything?q=technologies&language=es&from=2022-08-27&to=2022-08-28&apiKey=ac36fa2e8bc7425d822f7ed292147515

https://newsapi.org/v2/top-headlines?category=technology&language=es&pageSize=3&apiKey=ac36fa2e8bc7425d822f7ed292147515

*/

const ApyKey = 'ac36fa2e8bc7425d822f7ed292147515';

 export const custom= ()=>{
    
    const  customFetch =  (endpoint)=>{
        const controller = new AbortController();

        setTimeout(()=>controller.abort(), 30000);

        return  fetch (endpoint, { signal: controller.signal})
                .then((response)=>
                    response.ok 
                    ? response.json() 
                    : Promise.reject({
                    error: true,
                    status: response.status,
                    statusText: response.statusText || 'Ocurrio un error'
                    }
                )
                ) 
                .catch(() =>{
                    const e = {
                        error: true,
                        statusText: 'No se pudo mostrar la información'
                    }
                    return e;
                });
    }
    const get = (url) => customFetch(url);

    return {get};
}



