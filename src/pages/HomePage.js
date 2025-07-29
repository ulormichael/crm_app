const HomePage = () => {
  const { setCurrentPage } = usePage(); // Call usePage hook here

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-2xl w-full transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 font-inter leading-tight">
          Welcome to Your <span className="text-blue-600">CRM Solution</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Manage your customer relationships, track leads, and streamline your sales process with ease.
          Our intuitive platform helps you focus on what matters most: growing your business.
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => setCurrentPage('login')} primary> {/* Use setCurrentPage directly */}
            Get Started
          </Button>
          <Button onClick={() => alert('Learn More button clicked!')}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;