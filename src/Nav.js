import React,{useEffect, useState} from 'react'
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
            <img src="/netflix-logo.png" alt="nav__logo" className="nav__logo"/>
            <img src="https//pbs/twimg.co/profile_images/124011999041155" alt="nav__avatar" className="nav__avatar"/>
        </div>
    )
}
