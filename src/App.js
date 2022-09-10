import Product from './Components/Product';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import CheckoutPage from './Components/CheckoutPage';
import CheckoutCard from './Components/CheckoutCard';

function App() {
  return (
    <div className="App">
      <Navbar />
     <CheckoutCard/>
     <CheckoutPage/>
     <Products />
     <Product />
     
    </div>

  );
}

export default App;