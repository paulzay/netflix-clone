import React,{useEffect, useState} from 'react';
import './nav.css'
// import logo from './netfllix-logo'
export default function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        })
        return ()=>{
            window.removeEventListener('scroll');
        }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="nav__logo" className="nav__logo"/>
            <div className="nav__avatar"></div>
        </div>
    )
}
