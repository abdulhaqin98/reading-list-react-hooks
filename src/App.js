import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
   return (
      <div className="App">
         <ThemeContextProvider>
            <AuthContextProvider>
               {/* The below ones are going as props' children */}
               <Navbar />
                  <BookContextProvider>
                     <BookList />
                  </BookContextProvider>
               <ThemeToggle />
            </AuthContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export default App;