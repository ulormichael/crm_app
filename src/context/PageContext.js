import React, { createContext, useContext, useState } from 'react';
const PageContext = createContext(null);

const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home'); // Default page
  const [selectedItem, setSelectedItem] = useState(null); // To store the lead/customer being viewed/edited

  // Simulated CRM Data - moved here to be accessible by Dashboard and EditProfilePage
  const [crmData, setCrmData] = useState([
    { id: 1, type: 'Lead', name: 'Alice Johnson', email: 'alice@example.com', status: 'New' },
    { id: 2, type: 'Customer', name: 'Bob Williams', email: 'bob@example.com', status: 'Active' },
    { id: 3, type: 'Lead', name: 'Charlie Davis', email: 'charlie@example.com', status: 'Contacted' },
    { id: 4, type: 'Customer', name: 'Diana Miller', email: 'diana@example.com', status: 'Active' },
    { id: 5, type: 'Lead', name: 'Eve Brown', email: 'eve@example.com', status: 'Qualified' },
  ]);

  // Function to update CRM data after editing
  const updateCrmData = (updatedItem) => {
    setCrmData(prevData =>
      prevData.map(item => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage, selectedItem, setSelectedItem, crmData, setCrmData, updateCrmData }}>
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => useContext(PageContext);
export { PageProvider, usePage }; // Export both the Provider and the hook