//import functionalities from react -router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//App component will import the rest of the components
//of the entire application based on its path as ./booking/Home
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Services from './booking/Services'
import Maintain from './adm/Maintain'
import NavBar from './components/NavBar'

// we need to exacute the Nav function into the App
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/maintain" component={Maintain} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
