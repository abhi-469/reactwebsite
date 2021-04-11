import React, { useState } from 'react'
import List from './components/List'
import LoginForm from './components/LoginForm'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
const App = () => {
  const [user, setUser] = useState({ name: "", email: "", })
  const [error, setError] = useState("")
  
  const adminuser = ({
    email: 'eve.holt@reqres.in',
    password:'cityslicka',
  })

  
  const Login = (details) => {
    
    if (details.email == adminuser.email && details.password == adminuser.password)
    {
      setUser({
        name: details.name,
        email:details.email,
      })
    }
    else
    {
      setError(`Details do not match ! try again`)
    }
    
  }

  const Logout = () => {
    console.log("logout");
  }

  return (
    <div>
      {(user.email!= "") ? (
        <div className="welcome">
          <Router>
            <Switch>
            <Route exact path="/" component={List}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/user-list" component={List}/>
              <Route exact path="/add-user" component={AddUser} />
              <Route exact path="/edit-user/:id" component={EditUser}/>

            </Switch>
          </Router>
        </div>
      ) : (
          <LoginForm Login={Login} error={error}/>
      )}
     
    </div>
  )
}

export default App
