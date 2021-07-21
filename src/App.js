import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinsList from './components/CoinsList';
import styles from './styles/App.module.css';

const App = () => (
  <div className={`${styles.App} shadowed_big`}>
    <Navigation />
    <Switch>
      <Route exact path="/" component={CoinsList} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/coininfo/:coinid" component={CoinDetailPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
