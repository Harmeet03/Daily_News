import React, { useEffect, useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
import Logo from './Images/DAILY_NEWS_LOGO.png'

const Navbar = () => {
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
                    <p style={{cursor: 'pointer'}} onClick={() => {Navigate('/technology');}}> Technology </p>
                </div>
            </nav>
        </>
    );
}

export default Navbar;