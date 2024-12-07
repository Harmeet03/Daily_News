import React, { useEffect, useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
import Logo from './Images/DAILY_NEWS_LOGO.png'

const Navbar = () => {
    
    useEffect(() => {
        applyTheme();
    }, []);

    const applyTheme = () => {
        let body = document.querySelector('body');
        let nav = document.querySelector('nav');
        let links = document.querySelectorAll('.down p');
        
        const darkTheme = () => {
            body.style.backgroundColor = 'rgb(37,37,37)';
            body.style.color = 'white';
            nav.style.backgroundColor = 'black';
            links.forEach(link => {
                link.style.color = 'white';
            });
            localStorage.setItem('Theme', 'Dark');
        }
        
        const lightTheme = () => {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            nav.style.backgroundColor = 'white';
            links.forEach(link => {
                link.style.color = 'black';
            });
            localStorage.setItem('Theme', 'Light');
        }

        let savedTheme = localStorage.getItem('Theme');
        if(savedTheme === 'Dark'){
            lightTheme();
        }
        else{
            darkTheme();
        }
    }

    const Navigate = useNavigate();
    return(
        <>
            <nav>
                <div className="up">
                    <img src={Logo} style={{cursor: 'pointer'}} onClick={() => {Navigate('/')}}></img>
                </div>
                <div className="down">
                    <p style={{cursor: 'pointer'}} onClick={() => {Navigate('/finance');}}> Finance </p>
                    <p style={{cursor: 'pointer'}} onClick={() => {Navigate('/politics');}}> Politics </p>
                    <p style={{cursor: 'pointer'}} onClick={() => {Navigate('/sports');}}> Sports </p>
                    <p style={{cursor: 'pointer'}} onClick={() => {Navigate('/technology');}}> Tech </p>
                    <p onClick={applyTheme} style={{cursor: 'pointer'}}> ☀️ </p>
                </div>
            </nav>
        </>
    );
}

export default Navbar;