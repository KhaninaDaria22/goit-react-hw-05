import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies"> Movies</Link>
        </nav>
      </header>
        <Outlet />
    </>
  );
};

export default SharedLayout;

