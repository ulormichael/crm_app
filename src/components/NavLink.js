const NavLink = ({ to, children }) => {
  const { currentPage, setCurrentPage } = usePage();
  const isActive = currentPage === to;

  return (
    <button
      onClick={() => setCurrentPage(to)}
      className={`relative text-white font-medium text-lg py-1 px-2 rounded-md transition duration-300 ease-in-out
        ${isActive ? 'bg-blue-700 bg-opacity-70' : 'hover:bg-blue-500 hover:bg-opacity-50'}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left animate-underline"></span>
      )}
    </button>
  );
};