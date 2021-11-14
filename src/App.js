import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Products from './pages/Home/Products/Products';
import Reviews from './pages/Home/Reviews/Reviews';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import Explores from './pages/Explore/Explores/Explores';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct'
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Buying from './Buying/Buying';
import About from './pages/About/About';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
  <AuthProvider>
     <Router>
       <Header></Header>
      <Switch>

        <Route exact path="/">
         <Home></Home>
        </Route>

        <Route  path="/home">
         <Home></Home>
        </Route>

        <Route  path="/products">
         <Products></Products>
        </Route>

        <PrivateRoute  path="/buying/:id">
         <Buying></Buying>
        </PrivateRoute>

        <Route  path="/reviews">
         <Reviews></Reviews>
        </Route>

        <Route  path="/explore">
         <Explores></Explores>
        </Route>

        <Route  path="/about">
         <About></About>
        </Route>

        <Route path="/addproduct">
         <AddProduct></AddProduct>
        </Route> 

        <Route path="/makeadmin">
         <MakeAdmin></MakeAdmin>
        </Route>

        <Route path="/login">
         <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="*">
         <NotFoundPage></NotFoundPage>
        </Route>

      </Switch>
      <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
