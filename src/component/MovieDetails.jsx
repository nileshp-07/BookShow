import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const [loading , setLoading] = useState(true);
    const {id} = useParams();
    // console.log(id);
    // console.log("movie : ", movie );

   
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try{
                setLoading(true);
                const reponse = await fetch(`https://api.tvmaze.com/shows/${id}`)
                .then((response) => response.json())
                .then((data) => setMovie(data));

                setLoading(false);
                // console.log("Result : ",result);
            }
            catch(error)
            {
                console.log("movie details could not be fetched");
            }
        }
        fetchMovieDetails();
    }, [])

    const handleBookTicket = () => {
        localStorage.setItem('movie', JSON.stringify(movie));
        
        navigate("/book-show")
      };

    if(loading){
        return (
            <div className='min-h-screen bg-[#585D69] grid place-items-center'>
                <div className='spinner'>

                </div>
            </div>
        )
    }
  return (
    <div className='bg-[#424854] min-h-screen py-10'>
        <div className='w-11/12 max-w-[1200px] mx-auto bg-[#585D69] p-6 rounded-md flex sm:flex-row flex-col gap-5'>
                <img
                    src={movie?.image?.original}
                    alt='movie-thumbnail'
                    loading='lazy'
                    className='rounded-md md:w-[30%]'
                />
            <div className='flex flex-col items-center justify-center text-xl  text-white'>
                <p dangerouslySetInnerHTML={{ __html: movie?.summary }}></p>
                <button className='mt-5 py-2 px-3 rounded-md bg-[#4cdaec]' onClick={() =>handleBookTicket()}>
                  Book
               </button>
            </div>
           
        </div>
    </div>
  )
}

export default MovieDetails