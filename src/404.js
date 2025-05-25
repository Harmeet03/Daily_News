import './App.css'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const Link = useNavigate();
    const theme = localStorage.getItem('Theme');

    if(theme === 'Light'){
        let body = document.querySelector('body');
        body.style.color = 'white'
        body.style.backgroundColor = 'rgb(37,37,37)'
    }

    return(
        <>
        <div className='error'>
            <p onClick={() => Link('/')} style={{cursor: 'pointer'}}> Back </p>
            <div>
                <h1> 404😔 </h1>
                <p> The news you want does not exists </p>
            </div>
        </div>
        </>
    );
}

export default NotFound;