import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = '49ef91acf94ea7653018d0c5d6d68b56';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        netflixOriginal: builder.query({
            query: () => `/discover/tv?api_key=${API_KEY}&with_networks=213`
        }),
        fetchTrending: builder.query({
            query: () => `/trending/all/week?api_key=${API_KEY}`
        }),
        fetchTopRated: builder.query({
            query: () => `/tv/latest?api_key=${API_KEY}&language=en-US`
        }),
        fetchAction: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=28`
        }),
        fetchComedy: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=35`
        }),
        fetchHorror : builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=27`
        }),
        fetchRomance: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=10749`
        }),
        fetchDocumentary: builder.query({
            query: () => `/discover/movie?api_key=${API_KEY}&with_genres=99`
        }),
    })
})

export const {useNetflixOriginalQuery, useFetchTrendingQuery, useFetchTopRatedQuery, useFetchActionQuery, useFetchComedyQuery, useFetchRomanceQuery, useFetchHorrorQuery, useFetchDocumentaryQuery} = moviesApi;