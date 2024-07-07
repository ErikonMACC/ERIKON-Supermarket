import('tailwindcss')
import { Outlet , useNavigate  } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import { useEffect } from 'react';


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('productList')
  }, [navigate])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
