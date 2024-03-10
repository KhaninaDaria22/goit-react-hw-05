import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import MoviesDetails from '../pages/MoviesDetails';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPages from '../pages/NotFoundPages';
import MoviesDetails from '../pages/MoviesDetails';
import Cast from "./Cast";
import Reviews from "./Reviews";
import SharedLayout from "./SharedLayout";
import Toaster from 'react-hot-toast';

export default function App() {
  return (
    <div>

        <SharedLayout/>

        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="movies" element={<MoviesPage />} />
            <Route path="*" element={<NotFoundPages/>}/>
        
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <Toaster />
    </div>
  );
}

        



