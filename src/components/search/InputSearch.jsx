import React from 'react';
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './inputSearch.css';

export default function InputSearch({getSearchValue}) {
    const [valueInput, setValueInput ] = useState(null);

    const onChange= (e)=>{
        setValueInput(e.target.value.toLowerCase())
        getSearchValue(e.target.value.toLowerCase())
    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(valueInput!=null){
            getSearchValue(valueInput)
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
