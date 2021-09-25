import React from "react";
import Banner from "../Banner";
import "./HomeScreeen.css";
import Nav from "../Nav";
// import requests from "../Requests";
import Row from "../Row";
import {useNetflixOriginalQuery, useFetchActionQuery, useFetchTrendingQuery, useFetchComedyQuery, useFetchRomanceQuery, useFetchHorrorQuery, useFetchDocumentaryQuery} from '../features/moviesApi';
import Loader from './loader'

function HomeScreeen() {
  const {data: original, isLoading} = useNetflixOriginalQuery()
  const {data: action} = useFetchActionQuery()
  const {data: trending} = useFetchTrendingQuery()
  const {data: comedy} = useFetchComedyQuery()
  const {data: horror} = useFetchHorrorQuery()
  const {data: romance} = useFetchRomanceQuery()
  const {data: documentary, isFetching} = useFetchDocumentaryQuery()
  
  if (isLoading || isFetching) return <Loader />;

  const originalMovies = original?.results;
  const actionMovies = action?.results;
  const trendingMovies = trending?.results;
  const comedyMovies = comedy?.results;
  const horrorMovies = horror?.results;
  const romanceMovies = romance?.results;
  const documentaryMovies = documentary?.results;

  let count = 11;
  return (
    <div className="homescreen">
      <Nav />

      <Banner />

      <Row
        key={count++}
        title="NETFLIX ORIGINALS"
        movies={originalMovies}
        isLargeRow
      />

     <Row
        key={count++}
        title="Top Rated"
        movies= {trendingMovies}        
      />
 
      <Row
        key={count++}
        title="Action Movies"
        movies= {actionMovies} 
        
      />
      <Row
       key={count++}
        title="Comedy Movies"
        movies= {comedyMovies}
        
      />
      <Row
        key={count++}
        title="Horror Movies"
        movies= {horrorMovies}
      />
      <Row
        key={count++}
        title="Romance Movies"
        movies= {romanceMovies}
      />
      <Row
        key={count++}
        title="Documentaries"
        movies= {documentaryMovies}
      />
      
    </div>
  );
}

export default HomeScreeen;
