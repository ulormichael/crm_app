// App.js
import React from 'react';
import { PageProvider } from './context/PageContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import './tailwind.css';

import InnerApp from './InnerApp'; // ✅ We'll move the logic to this component

const App = () => (
  <PageProvider>
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  </PageProvider>
);

export default App;








// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { PageProvider } from './context/PageContext';
// import { AuthProvider } from './context/AuthContext';
// import './App.css';
// import './tailwind.css';



// const App = () => {
//   const { currentPage } = usePage();

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <HomePage />;
//       case 'login':
//         return <LoginPage />;
//       case 'dashboard':
//         return <DashboardPage />;
//       case 'viewProfile':
//         return <ViewProfilePage />;
//       case 'editProfile':
//         return <EditProfilePage />;
//       default:
//         return <HomePage />;
//     }
//   };

//   return (
//     <div className="font-sans antialiased">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
//           body { font-family: 'Inter', sans-serif; }
//           .animate-underline {
//             animation: expandUnderline 0.3s forwards;
//           }
//           @keyframes expandUnderline {
//             from { transform: scaleX(0); }
//             to { transform: scaleX(1); }
//           }
//         `}
//       </style>
//       <Navbar />
//       {renderPage()}
//     </div>
//   );
// };

// // Wrap App with providers
// export default () => (
//   <PageProvider>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </PageProvider>
// );