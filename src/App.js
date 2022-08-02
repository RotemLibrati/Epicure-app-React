import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Component
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage/HomePage';
import RestaurantPage from './pages/Restaurant/RestaurantPage';
import Restaurants from './pages/Restaurant/Restaurants';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar />

            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/restaurants' element={<Restaurants />} />
              <Route exact path='/restaurants/:id' element={<RestaurantPage />} />
            </Routes>
            {/* <Footer /> */}
          </React.Fragment>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
