import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';
import MovieDetailView from './views/MovieDetailView';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/movies/:movieId" component={MovieDetailView} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
