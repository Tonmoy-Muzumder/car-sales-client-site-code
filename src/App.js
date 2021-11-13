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
import Dashboard from './pages/Dashboard/Dashboard/Dashboard'
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Buying from './Buying/Buying';
import NotFoundPage from './NotFoundPage/NotFoundPage';

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

        <Route  path="/buying/:id">
         <Buying></Buying>
        </Route>

        <Route  path="/reviews">
         <Reviews></Reviews>
        </Route>

        <Route  path="/explore">
         <Explores></Explores>
        </Route>

        <Route  path="/dashboard">
         <Dashboard></Dashboard>
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
