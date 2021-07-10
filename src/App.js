import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import CoinsIndexPage from './pages/CoinsIndexPage';
import AboutPage from './pages/AboutPage';
import CoinDetailPage from './pages/CoinDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={CoinsIndexPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/item" component={CoinDetailPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
