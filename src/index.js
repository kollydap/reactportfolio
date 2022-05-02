import React from 'react';
import ReactDOM from 'react-dom';
import blogList from './components/BlogList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import MyNavbar from './components/Navbar'


import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogList from './components/BlogList';

ReactDOM.render(
  <BrowserRouter>
  <MyNavbar />
  <Routes>
    <Route  exact path="/" element={<App />}> </Route>
    <Route path='blogs' element={<BlogList />}></Route>
      <Route path='blogs/:id/' element={<Blogs />}> </Route>
  </Routes>
  <Footer />
</BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
