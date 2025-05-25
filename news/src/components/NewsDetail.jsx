import React, { useEffect, useState } from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import Navbar from '../Navbar.jsx';
import { Helmet } from 'react-helmet';
import Loader from '../Loading.jsx';

const NewsDetail = () => {
    const { id } = useParams();
    
    const API_KEY = 'pub_4946341641b9764eb0741bbd661bd4b7c9e43';
    // const API_KEY = 'pub_49696d65dffed478384f5acc3d77d8b16c9b5';
    const categories = ['', 'business', 'politics', 'sports', 'technology'];
    
    const [newsDetail, setNewsDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [connection, setConnection] = useState(false);
    
    useEffect(() => {
        fetchNewsDetail();
    }, [id]);
    
    const fetchNewsDetail = async () => {
        try{
            for(const category of categories){
                const response = await fetch(`https://newsdata.io/api/1/latest?country=in${category ? `&category=${category}` : ''}&apikey=${API_KEY}`);
                
                if(response.ok){
                    const content = await response.json();
                    const article = content.results.find(article => article.article_id === id);

                    if(article){
                        setNewsDetail(article);
                        setLoading(false);
                    }
                }
                else if(response.status === 429){
                    console.log('Too many Request');
                    setLoading(false);
                    setError(true);
                }
                else{
                    console.log('Connection Problem');
                    setLoading(false);
                }
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
                <div className="min-h-screen dark:bg-gray-700 dark:text-white">
                    <Navbar/>
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

    if(!newsDetail){
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
                <img src={newsDetail.image_url} className="w-full sm:w-200 sm:m-auto lg:rounded-t-xl bg-white mt-5 sm:mt-5"/>
                <div className="px-4 pb-8 sm:w-150 sm:m-auto lg:w-200 bg-white dark:bg-gray-900 transition-all">
                    <h2 className="text-4xl py-8 font-bold"> {newsDetail.title} </h2>
                    <div className="flex flex-row justify-between">
                        <p> <span> By </span> <b className="text-blue-500">{newsDetail.creator == null ? <span>Unknown</span> : (newsDetail.creator)}</b></p>
                        <p> - <b className="text-blue-500">{newsDetail.pubDate}</b></p>
                    </div>
                    <p className="py-8 text-2xl"> {newsDetail.description == null ? <span>No description available.</span> : (newsDetail.description)} </p>
                    <p className=""> Source: <b><a href={newsDetail.link} target="_blank" rel="noreferrer" className="text-blue-500 cursor-pointer hover:text-xl transition-all"> {new URL(newsDetail.link).hostname} </a></b></p>
                </div>
            </div>
        </>
    );

}

export default NewsDetail;