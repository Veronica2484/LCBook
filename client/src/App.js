//import functionalities from react -router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//import those to handle notification
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'

//App component will import the rest of the components
//of the entire application based on its path as ./booking/Home
//Components
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Services from './user/Services'
import ServicesOwner from './user/ServicesOwner'
import NewItem from './items/NewItem'
import EditItem from './items/EditItem'
import ViewItem from './items/ViewItem'
import CheckOut from './booking/CheckOut'
import Confirmation from './booking/Confirmation'

// we need to exacute the Nav function into the App
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
      />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/services" component={Services} />
        <PrivateRoute exact path="/services/owner" component={ServicesOwner} />
        <PrivateRoute exact path="/items/new" component={NewItem} />

        <PrivateRoute exact path="/item/edit/:itemId" component={EditItem} />
        <Route exact path="/item/:itemId" component={ViewItem} />
        <PrivateRoute
          exact
          path="/booking/checkout/:itemId"
          component={CheckOut}
        />
        <PrivateRoute
          exact
          path="/booking/confirmation"
          component={Confirmation}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
