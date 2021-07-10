import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import CoinsIndexPage from './pages/CoinsIndexPage';
import AboutPage from './pages/AboutPage';
import CoinDetailPage from './pages/CoinDetailPage';
import TrackedCoinsPage from './pages/TrackedCoinsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={CoinsIndexPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/item" component={CoinDetailPage} />
        <Route exact path="/tracked" component={TrackedCoinsPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
