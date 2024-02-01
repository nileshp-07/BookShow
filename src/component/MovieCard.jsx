import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { Link } from 'react-router-dom';

const MovieCard = ({show}) => {
    const {
        id,
        image,
        name,
        language,
        genres,
        runtime,
        premiered,
        rating
    } = show;
  return (
    <Link to={`/show/${id}`}>
        <div className='bg-[#585D69] p-4 rounded-md hover:scale-105 duration-200 cursor-pointer'>
            <img
                src={image?.original}
                className='rounded-md h-[500px] w-full'
            />
            <div className='text-white'>
                <div className='flex justify-between gap-10 pr-5 mt-2 '>
                    <h2 className='text-2xl font-medium'>
                        {name}
                    </h2>
                    {
                        rating.average && (
                            <p className='flex  font-bold gap-2 items-center'>
                                <span className='text-green-700 font-extrabold text-lg'>
                                {rating?.average} 
                                </span>
                                <span>Avg. rating</span>
                            </p>
                        )
                    }
                
                </div>
                <p>{`Language: `}
                    <span className='font-medium'>{language}</span>
                </p>
                <div className='flex gap-1'>
                    <p>Genres: </p>
                    <div  className='flex font-medium'>
                        {
                            genres.map((item , index) => (
                                <span key={index}>
                                {item}
                                {
                                    index !== genres.length - 1 && (
                                        <span>/</span>
                                    )
                                }
                                </span>
                            ))
                        }
                    </div>
                    
                </div>
                <div className='flex gap-2 opacity-80'>
                    <p>{`${runtime} mins | `}</p>
                    <p>{premiered}</p>
                </div>
            </div>
        </div>
    </Link>
   
  )
}

export default MovieCard