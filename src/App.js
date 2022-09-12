//import Product from './Components/Product';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import CheckoutPage from './Components/CheckoutPage';
//mport CheckoutCard from './Components/CheckoutCard';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
     <Switch>
     <Route path='/signin'>
          <SignIn/>
        </Route>

        <Route path='/signup'>
          <SignUp/>
        </Route>


     <Route path='/checkout-page'>
          <CheckoutPage/>
        </Route>

        <Route path='/'>
          <Products />
        </Route>

     </Switch>

    </div>

    </Router>
  );
}

export default App;