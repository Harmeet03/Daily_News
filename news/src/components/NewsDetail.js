import React, { useEffect, useState } from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet';
import Loader from '../Loading';

const NewsDetail = () => {
    const { id } = useParams();
    
    // const API_KEY = 'pub_4946341641b9764eb0741bbd661bd4b7c9e43';
    const API_KEY = 'pub_49696d65dffed478384f5acc3d77d8b16c9b5';
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
                <Navbar/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Loader/>
            </>
        );
    }

    if(error){
        return(
            <>
                <Navbar/>
                <p style={{marginTop: '350px', textAlign: 'center', padding: '0px 40px'}}> The server responded with a status of <b style={{color: 'red'}}>429 (TOO MANY REQUESTS).</b> <br/>Sorry for the inconvenience :( <br/>Kindly try again later.</p>
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
                <p style={{marginTop: '100px', textAlign: 'center'}}> Connection Problem. <br/>Kindly check the Internet and try again. </p>
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

            <Navbar/>
            
            <div className="detail">
                <h2> {newsDetail.title} </h2>
                <img src={newsDetail.image_url}/>
                <div>
                    <p className="from">Posted By:<br/> <b>{newsDetail.creator == null ? <span>No Data</span> : (newsDetail.creator)}</b></p>
                    <p className="time">Published at:<br/> <b>{newsDetail.pubDate}</b></p>
                </div>
                <p className="desc"> {newsDetail.description == null ? <span>No Description Available in the server :(</span> : (newsDetail.description)} </p>
                <p className="source"> Source: <b><a href={newsDetail.link} target="_blank" rel="noreferrer"> {newsDetail.link} </a></b></p>
            </div>
        </>
    );

}

export default NewsDetail;