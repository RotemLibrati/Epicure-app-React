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
import DishPage from './pages/DishPage/DishPage';
import ChefsPage from './pages/ChefPage/ChefsPage';
import OrderHistoryPage from './pages/OrderPage/OrderHistoryPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

//Context
import SetToggleOrderProvider from './context/SetToggleCart';

const App = () => {
  return (
    <Provider store={store}>
      <SetToggleOrderProvider>
        <div className="App">
          <Router>
            <React.Fragment>
              <Navbar />

              <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/restaurants' element={<Restaurants />} />
                <Route exact path='/restaurants/:id' element={<RestaurantPage />} />
                <Route exact path='/restaurants/dish/:id' element={<DishPage />} />
                <Route exact path='/chefs' element={<ChefsPage />} />
                <Route exact path='/orders/history' element={<OrderHistoryPage />} />
                <Route exact path='/checkout' element={<CheckoutPage />} />
              </Routes>
              {/* <Footer /> */}
            </React.Fragment>
          </Router>

        </div>
      </SetToggleOrderProvider>
    </Provider>
  );
}

export default App;
