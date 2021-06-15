import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTech } from "../actions/fetch_tech";

const Tech = () => {
    const techSelector = useSelector((state) => state.FetchTech);
    const dispatch = useDispatch();
    const getTechNews = () => dispatch(fetchTech());
    

    useEffect(()=>{
       getTechNews();
    }, [])


    return(
        <React.Fragment>
            <section>
                <h2 className="header__title">Technology News</h2>
                <div className="news">
                    {techSelector.techNews.map(data => {
                        return (
                            <div className="post" key={data.title}> 
                                <a className="post__link" target="_blank" rel="noopener noreferrer" href={data.url}>
                                    <img className="post__img" src={data.urlToImage} />
                                    <h2 className="post__title">{data.title}</h2>
                                    <p className="post__desc">{data.description}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        </React.Fragment>
    )   
}

export default Tech;