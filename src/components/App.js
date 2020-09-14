import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';
import MovieDetailView from './views/MovieDetailView';
import styles from './search/search.module.css';
import routes from '../routes';

const App = () => (
  <>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink to={routes.movies}>Movies</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route path={routes.movieDetails} component={MovieDetailView} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
