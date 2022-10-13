import React from 'react';
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './inputSearch.css';

export default function InputSearch({get}) {
    const [valueInput, setValueInput ] = useState(null);

    const onChange= (e)=>{
        setValueInput(e.target.value.toLowerCase())
        get(e.target.value.toLowerCase())
        console.log(e)


    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(valueInput!=null){
            get(valueInput)
        }
    }

    return(
        <>
            <form className='wrapper-search'>
                <div className="container-search">
                    <input className='input-search' placeholder='Buscar...' type="search" onChange={onChange}></input>
                    <button className='btn-search' onClick={handleClick}><FiSearch className='search-icon'/></button>
                </div>
            </form>
        </>
    )
};
