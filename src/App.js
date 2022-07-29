import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar />

            <Routes>
              <Route exact path='/' element={<HomePage />} />
            </Routes>
          </React.Fragment>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
