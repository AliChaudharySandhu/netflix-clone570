import React from 'react'
import './Row.css';
import VideoIcon from './images/play-icon.png'

function Row({title, movies, isLargeRow = false}) {

const baseUrl = "https://image.tmdb.org/t/p/original/";

const showPosterInfo = (name) =>{
    <h1>{movies.name}</h1>
}

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                
                    {movies?.map((movie) => (

                    ((isLargeRow && movie.poster_path ) || (!isLargeRow && movie.backdrop_path)) &&
                        
                        (
                        <div key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}>
                            <img onMouseEnter={showPosterInfo(movie.name)} key={movie.id}
                            src={`${baseUrl}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} 
                            alt={movie.name}/>

                            <div className="row__posterDetail">
                                {
                                    isLargeRow ? (
                                        <>
                                            <h3>{movie.name}</h3>
                                            <a className="videoIcon" href="#"><img src={VideoIcon}></img></a>
                                            
                                            <span className="vote_avg">{movie.vote_average}</span>
                                            <span>{movie.release_date}</span>
                                        </>
                                    ) : <a className="videoIcon" href="#"><img src={VideoIcon}></img></a>
                                }
                                

                            </div>
                        </div>
                        )
                        

                    )
                    ) }

                
                
            </div>
            


        </div>
    )
}

export default Row
