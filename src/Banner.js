import React from 'react'
import './Banner.css'
import {useNetflixOriginalQuery} from '../src/features/moviesApi'

function Banner() {

    const {data, isLoading} = useNetflixOriginalQuery();
    if(isLoading) return 'loading ...'

    const movies = data?.results;
    const movie = movies[Math.floor(Math.random() * movies?.length - 1)]


    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;

    }
    return (
        <header className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            backgroundSize: 'cover'

        }}> 

        <div className="banner__contents">
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <h1 className="banner__descrip" >{truncate(`${movie?.overview}`, 150)}</h1>
        </div>

        <div className="banner__fadeBottom"></div>
            
        </header>
    )
}

export default Banner
