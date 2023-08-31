import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import Header from './components/Header';
import MyRedux from './MyRedux'; // Import YourComponent with the correct case

function App() {
  return (
    <Router>
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
        <MyRedux />
        {' '}
        {/* Use MyRedux as a component with the correct case */}
      </div>
    </Router>
  );
}

export default App;
