import React from 'react';
import './cardNews.css';
import {AiOutlineClockCircle} from 'react-icons/ai';
import  imgDefault from '../../assets/img/img_error_loading.svg';
import { sliceString } from '../../helpers/funString';
import { Link } from 'react-router-dom';



export default function CardNews({id, image, title, description, date, category}) {
    let newDate = new Date(date.slice(0,10)+"T00:00:00").toLocaleDateString("es-MX");

    return(
        <>
         <div className='content-card'>
            <Link to={`/details/${category}/${title}`} state={{id, category, title}}>
                    <div className='img-card'>    
                        <img src={image==="" || image===null ? imgDefault : image} className='img-news' alt='imagen'></img>
                    </div>
                    <div className='body-card'>
                        <h3 className='title-card'>{sliceString(title)}</h3>
                    <p className='paragraph-card'>{sliceString(description)}</p>
                    <div className='date'>
                        <AiOutlineClockCircle className='date-icon'/>
                        <p>{newDate}</p>
                    </div>
                    </div>
            </Link>    
        </div>
        </>
    )
};

