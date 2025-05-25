import React, { useEffect, useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Navbar from '../Navbar.jsx';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';
import Loader from '../Loading.jsx';


const Sports = () => {
    
    // const API_KEY = 'pub_4946341641b9764eb0741bbd661bd4b7c9e43';
    const API_KEY = 'pub_49696d65dffed478384f5acc3d77d8b16c9b5';
    const CATEGORY = 'sports';
    
    const NEWS_LIMIT = 10;

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [connection, setConnection] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try{
            const response = await fetch(`https://newsdata.io/api/1/latest?country=in&category=${CATEGORY}&apikey=${API_KEY}`); 
            if(response.ok){
                const content = await response.json();
                setNews(content.results);
                setLoading(false);
            }
            else if(response.status === 429){
                console.log('Too many Request');
                setLoading(false);
                setError(true);
            }
            else{
                console.log('Connection Problem');
                setLoading(false);
                setConnection(true);
            }
        }
        catch(error){
            setLoading(false);
            setConnection(true);
            console.log('Error: ', error);
        }
    }

    if(loading){
        return(
             <>  
                <div className="min-h-screen dark:bg-gray-700 dark:text-white transition-all">
                    <Navbar/>
                    <h2 className="text-3xl text-center sm:text-4xl sm:px-16 text-blue-500 mt-8"> SPORTS NEWS </h2>
                    <Loader/>
                </div>
            </>
        );
    }

    if(error){
        return(
            <>
                <div className="min-h-screen dark:bg-gray-700 dark:text-white transition-all">
                    <Navbar/>
                    <h2 className="text-3xl text-center sm:text-4xl sm:px-16 text-blue-500 mt-8"> SPORTS NEWS </h2>
                    <p className="text-center py-16 px-8"> The server responded with a status of <b className="text-blue-500">429 (TOO MANY REQUESTS).</b> <br/>Sorry for the inconvenience :( <br/>Kindly try again later.</p>
                </div>
            </>
        );
    }

    if(connection){
        return(
            <>
                <div className="min-h-screen dark:bg-gray-700 dark:text-white transition-all">
                    <Navbar/>
                    <p className="text-center mt-40"> <b className="text-blue-500 text-4xl">No Internet.</b> <br/>Kindly check the Internet and try again. </p>
                </div>
            </>
        );
    }

    if(!news){
        return setLoading(true)
    }

    return(
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>

            <div className="min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-white transition-all">
                <Navbar/>
                <h2 className="text-3xl text-center sm:text-4xl text-blue-500 mt-8"> SPORTS NEWS </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:w-250 lg:m-auto p-4 sm:p-16 gap-8">
                    {
                        news.slice(0, NEWS_LIMIT).map((content) => (
                            <div className="bg-white cursor-pointer hover:scale-110 transition-all rounded-t-xl dark:bg-gray-900" key={content.article_id}>
                                <Link to={`/news/${content.article_id}`}>
                                    <img src={content.image_url} className="w-full h-50 rounded-t-xl" alt="Image Not Found"/>
                                    <div className="p-8">
                                        <p className="capitalize text-xl text-blue-500 pb-2"> {content.category} </p>
                                        <h3 className="text-lg">{content.title}</h3>
                                        <p className="text-blue-500 text-sm text-left pt-4">Published at:<br/> <b>{content.pubDate}</b></p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <Footer/>
            </div>
        </>
    );

}

export default Sports;