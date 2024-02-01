import {Routes, Route } from 'react-router-dom';
import ShowAllMovies from './component/ShowAllMovies';
import MovieDetails from './component/MovieDetails';
import BookForm from './component/BookForm';

function App() {
  return (
    <div> 
      <div className='text-center text-2xl md:text-4xl font-bold bg-[#2C333F] py-3 text-white'>Movie Booking Website</div>

      <Routes>
         <Route path='/' element={<ShowAllMovies/>}/>
         <Route path='/show/:id' element={<MovieDetails/>}/>
         <Route path='/book-show' element={<BookForm/>}/>
      </Routes>
    </div>
  );
}

export default App;