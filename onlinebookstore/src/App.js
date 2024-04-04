import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import BookCatalog from './component/catalog/BookCatalog';
import ShoppingCart from './component/cart/ShoppingCart';
import UserProfile from './component/profile/UserProfile';
import AdminPanel from './component/Admin/AdminPanel';
import Home from './component/pages/Home';

function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={ <BookCatalog />}/>
        <Route path='/profile' element={<UserProfile />}/>
        <Route path='/cart' element={<ShoppingCart />}/>
        <Route path='/admin' element={ <AdminPanel />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;



