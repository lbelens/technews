import React from 'react';
import './messageLoad.css';

export function MessageLoad({message=null, info}){
    return(
        <>
            <div className='wrapper-message'>
                <div className='message'>
                   { message && <h2>Oups! Error {message.status}</h2>}
                    <h3>{info}</h3>
                    <p>Porfavor intente más tarde</p>
                </div>
            </div>
        </>
    )
}