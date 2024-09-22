/* The components that keep changing are put inside routes
and rest other components are put outside*/ 

import './App.css';
import Navbar from './Components/NavBar/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import {Routes, Route} from 'react-router-dom';
import Products from './Screen/Products/products';
import Footer from './Components/Footer/footer';
import Cart from './Screen/Cart/cart';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>   
      <Footer/>                                  
    </div>
  );
}

export default App;
