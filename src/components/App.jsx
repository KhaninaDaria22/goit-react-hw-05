import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Toaster from 'react-hot-toast';

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFoundPages = lazy(() => import("../pages/NotFoundPages"));
const MoviesDetails = lazy(() => import("../pages/MoviesDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));
const SharedLayout = lazy(() => import("./SharedLayout"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<HomePage/>} />
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
      </Suspense>
    </div>
  );
}

        



