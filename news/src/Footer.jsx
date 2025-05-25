import './App.css'
import logo from './Images/Logo.png'

const Footer = () => {
    return(
        <>
        <footer className='flex flex-col justify-center text-center items-center text-lg py-16 px-8 sm:text-2xl dark:bg-gray-700 dark:text-white'>
            <img src={logo} className='w-40'></img>
            <p> This website is for demonstration of my skills purpose only. No copyright intended </p>
        </footer>
        </>
    )
}

export default Footer;