import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import CoinsIndexPage from './pages/CoinsIndexPage';
import AboutPage from './pages/AboutPage';
import CoinDetailPage from './pages/CoinDetailPage';
import TrackedCoinsPage from './pages/TrackedCoinsPage';
import { TrackedCoinsListContextProvider } from './context/TrackedCoinsContext';

function App() {
  return (
    <div className="App">
      <TrackedCoinsListContextProvider>
        <BrowserRouter>
          <Navigation />
          <Route exact path="/" component={CoinsIndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/item" component={CoinDetailPage} />
          <Route exact path="/tracked" component={TrackedCoinsPage} />
          <Route path="/coininfo/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </TrackedCoinsListContextProvider>
    </div>
  );
}

export default App;
