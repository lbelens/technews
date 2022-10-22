import React from 'react';
import { Link } from 'react-router-dom';
import imageLogo from '../../assets/img/logo_isotipo.svg';
import './header.css';

export function Header (props){
    return(
        <>
            <header className='header'>
                <div className='logo-container'>
                    <Link to="/"><img src={imageLogo} alt="logo" className='logo-img'></img></Link>
                    <h1 className='title'>TechNews</h1>
                </div>
                {props.children}
            </header>
        
        </>
    )
}