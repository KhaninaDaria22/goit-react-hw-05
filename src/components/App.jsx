import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Toaster from 'react-hot-toast';

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFoundPages = lazy(() => import("../pages/NotFoundPages"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews"));
const Navigation = lazy(() => import("./Navigation"));

export default function App() {
  return (
    <div>
      
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
            <Route path="/" element={<Navigation/>}>
            <Route index element={<HomePage/>} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="*" element={<NotFoundPages/>}/>
        
            <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
              <Route path="cast" element={<MovieCast/>} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <Toaster />
      </Suspense>
    </div>
  );
}

        



