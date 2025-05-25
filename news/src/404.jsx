import './App.css'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const Link = useNavigate();

    return(
        <>
            <div>
                <br/>
                <span className='text-left text-2xl p-4 cursor-pointer hover:text-blue-500 hover:text-3xl transition-all' onClick={() => Link('/')} > Back </span>
                <div className='flex flex-col justify-center items-center mt-50 gap-4'>
                    <h1 className='text-6xl text-blue-500'> Oops😔 </h1>
                    <p className='text-2xl'> The news you want does not exists </p>
                </div>
            </div>
        </>
    );
}

export default NotFound;