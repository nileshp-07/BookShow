import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const ShowAllMovies = () => {
    const [shows, setShows] = useState([]);

    console.log("shows : ", shows);
    useEffect(() => {
        const fetchAllShows = async () => {
            const response = await fetch( "https://api.tvmaze.com/search/shows?q=all")
            .then((response) => response.json())
            .then((data) => setShows(data));
        }
        fetchAllShows();
    }, [])
  return (
    <div className='bg-[#424854] min-h-screen py-10'>
        <div className='w-11/12 max-w-[1200px] mx-auto'>
            <h2 className='text-white font-semibold'>All Show-</h2>

            <div className='mt-5 grid grid-cols-3 gap-7'>
                {
                    shows.map((show) => (
                        <MovieCard key={show.id} show={show.show}/>
                    )) 
                }
            </div>
        </div>
    </div>
  )
}

export default ShowAllMovies