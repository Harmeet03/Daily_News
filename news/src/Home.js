import React, { useEffect, useState } from "react";
import './App.css'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import Loader from './Loading';

const Home = () => {
    
    // const API_KEY = 'pub_4946341641b9764eb0741bbd661bd4b7c9e43';
    const API_KEY = 'pub_49696d65dffed478384f5acc3d77d8b16c9b5';
    const NEWS_LIMIT = 4;

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [connection, setConnection] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try{
            const response = await fetch(`https://newsdata.io/api/1/latest?country=in&apikey=${API_KEY}`); 
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
                <Navbar/>
                <header>
                    <h2> LATEST NEWS </h2>
                </header>
                <Loader/>
            </>
        );
    }

    if(error){
        return(
            <>
                <Navbar/>
                <header>
                    <h2> LATEST NEWS </h2>
                </header>
                <p style={{marginTop: '100px', textAlign: 'center', padding: '0px 40px'}}> The server responded with a status of <b style={{color: 'red'}}>429 (TOO MANY REQUESTS).</b> <br/>Sorry for the inconvenience :( <br/>Kindly try again later.</p>
            </>
        );
    }

    if(connection){
        return(
            <>
                <Navbar/>
                <header>
                    <h2> LATEST NEWS </h2>
                </header>
                <p style={{marginTop: '100px', textAlign: 'center'}}> <b style={{color: 'red'}}>Connection Problem.</b> <br/>Kindly check the Internet and try again. </p>
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

            <Navbar/>
            
            <header>
                <h2> LATEST NEWS </h2>
            </header>
            <div className="content">
                {
                    news.slice(0, NEWS_LIMIT).map((content) => (
                        <div className="box" key={content.article_id}>
                            <Link className="link" to={`/news/${content.article_id}`}>
                                <img src={content.image_url}></img>
                                <h3 className="heading">{content.title}</h3>
                                <p className="from">Posted By:<br/> <b>{content.creator == null ? <span>No Data</span> : (content.creator)}</b></p>
                                <p className="time">Published at:<br/> <b>{content.pubDate}</b></p>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <Footer/>
        </>
    );

}

export default Home;