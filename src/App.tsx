import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Homepage />
    <Card />
    <Footer />
    </div>
  );
}

export default App;
