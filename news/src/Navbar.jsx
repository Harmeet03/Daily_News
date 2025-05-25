import React, { useEffect, useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
import Logo from './Images/Logo.png'

const Navbar = () => {
    const Navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return (
            localStorage.theme === 'dark'
        )
    });

    useEffect(() => {
        const root = document.documentElement;
        if(darkMode){
            root.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        }
        else{
            root.classList.remove("dark")
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);
    
    return(
        <>
            <nav className="flex flex-col text-center pb-4 dark:bg-gray-700 dark:text-white transition-all">
                <div className="flex justify-center">
                    <img src={Logo} className="w-30 sm:w-40 cursor-pointer hover:scale-120 transition-all" onClick={() => {Navigate('/')}}></img>
                </div>
                <div className="flex flex-row gap-4 justify-center">
                    <p className="cursor-pointer hover:text-blue-500 hover:text-2xl transition-all" onClick={() => {Navigate('/finance');}}> Finance </p>
                    <p className="cursor-pointer hover:text-blue-500 hover:text-2xl transition-all" onClick={() => {Navigate('/politics');}}> Politics </p>
                    <p className="cursor-pointer hover:text-blue-500 hover:text-2xl transition-all" onClick={() => {Navigate('/sports');}}> Sports </p>
                    <p className="cursor-pointer hover:text-blue-500 hover:text-2xl transition-all" onClick={() => {Navigate('/technology');}}> Tech </p>
                    <p className="cursor-pointer hover:text-blue-500 hover:text-2xl transition-all" onClick={() => {setDarkMode(!darkMode)}}> {darkMode ? 'Light' : 'Dark'} </p>
                </div>
            </nav>
        </>
    );
}

export default Navbar;