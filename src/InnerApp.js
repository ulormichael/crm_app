// InnerApp.js
// import React from 'react';
import { usePage } from './context/PageContext';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ViewProfilePage from './pages/ViewProfilePage';
import EditProfilePage from './pages/EditProfilePage';

const InnerApp = () => {
  const { currentPage } = usePage();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'login':
        return <LoginPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'viewProfile':
        return <ViewProfilePage />;
      case 'editProfile':
        return <EditProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans antialiased">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          body { font-family: 'Inter', sans-serif; }
          .animate-underline {
            animation: expandUnderline 0.3s forwards;
          }
          @keyframes expandUnderline {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        `}
      </style>
      <Navbar />
      {renderPage()}
    </div>
  );
};

export default InnerApp;
