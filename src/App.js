import React,{useContext} from "react"
import Auth from "./components/Auth/Auth"
import Products from "./components/Products/Products"
import SelectedProduct from "./components/SelectedProduct/SelectedProduct"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import { AuthContext } from './context/auth-context'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const authContext = useContext(AuthContext)

  // let content = <Auth />

  // if() {
  //   content = <Products />
  // }

  return (
    <Router>
      <Switch>
       <Route path="/" exact render={() => authContext.isAuth ? <Products/> : <Auth />} />
       <Route path="/shoppingcart" component={ShoppingCart} />
       <Route path="/:id" component={SelectedProduct} />
      </Switch>
    </Router>
  )
}

export default App
