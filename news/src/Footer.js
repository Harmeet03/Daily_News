import React, { useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
import logo from './Images/DAILY_NEWS_LOGO.png'

const Footer = () => {
    const Link = useNavigate();
    return(
        <>
        <footer style={{backgroundColor: 'white', color: 'black', marginTop: '80px', padding: '20px 0px', textAlign: 'center', boxShadow: '1px 1px 20px'}}>
            <div className="left">
                <img src={logo} style={{width: '200px'}}></img>
            </div>
            <div className="right">
                <p> This website is for demonstration of my skills purpose only. No copyright intended </p>
            </div>
        </footer>
        </>
    )
}

export default Footer;