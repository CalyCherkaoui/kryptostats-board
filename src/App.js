import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
        <Navigation />
        <Switch>
          <Route exact path="/" component={CoinsIndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/tracked" component={TrackedCoinsPage} />
          <Route path="/coininfo/:coinid" component={CoinDetailPage} />
          <Redirect to="/" />
        </Switch>
      </TrackedCoinsListContextProvider>
    </div>
  );
}

export default App;
