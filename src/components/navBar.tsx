import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event : any) => {
    if (event.key === 'Enter') {
      navigate(`/productList/searched/${searchTerm}`);
    }
  }
  return (
    <header className="p-4">
      <div className="container mx-auto grid grid-cols-12 flex items-center gap-4">

        <Link to="/productList" className="col-span-3 flex items-center">
          <img src="../src/images/logo.png" alt="Logo" className="h-15" />
        </Link>

        <div className="col-span-7">
          <div className="search">
            <input type="text" placeholder="Search..." className="searchBar rounded-full" onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} />
          </div>
        </div>

        <div className="col-span-1"></div>

        <div className="col-span-1 flex justify-end">
          <button className="button rounded-md">
            <img src="../src/images/marketCarIcon.svg" alt="marketIcon" className="h-10" />
          </button>
        </div>
      </div>
    </header>
  )
};

export default Navbar;