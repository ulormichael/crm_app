const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold font-inter">CRM App</div>
        <div className="flex space-x-6">
          <NavLink to="home">Home</NavLink>
          {user ? (
            <>
              <NavLink to="dashboard">Dashboard</NavLink>
              <button
                onClick={logout}
                className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-medium"
              >
                Logout ({user.username})
              </button>
            </>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;