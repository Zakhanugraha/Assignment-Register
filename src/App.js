import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/home' component={HomePage} />
          </Switch>
        </Router>
      </div>
    </>
  )
}


export default App