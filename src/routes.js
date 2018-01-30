import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import CounterPage from './components/counter/CounterPage';
import GithubPage from './components/github/GithubPage';
import MoviePage from './components/movie/index';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
        <Route path="counter" component={CounterPage} />
        <Route path="github" component={GithubPage} />
        <Route path="findmovie" component={MoviePage} />
    </Route>
);