const Navbar = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/3 h-[70px] bg-black"> </div>
        <nav className="bg-black flex justify-end    items-center h-[70px] flex-grow">
          <div>
            <button className="bg-green-400 rounded py-2 px-5 mx-8 w-[max-content] h-10">
              Contact me
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
