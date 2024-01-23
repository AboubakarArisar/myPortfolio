import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Aside = () => {
  return (
    <Router>
      <aside className="w-[250px] h-screen mx-5 mb-5 mt-5 bg-[#1f1e26] grid grid-cols-1 rounded">
        <div className="flex flex-col justify-center items-center h-1/3">
          <Link className="text-[#8B8A91]" to="/">
            Home
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <h2 className="text-[#8B8A91]">Socials</h2>
        </div>
      </aside>
    </Router>
  );
};

export default Aside;
