import React from 'react'
import {Route, Link, BrowserRouter} from 'react-router-dom'
import Login from './Login' 
import Post from './Post'
import {connect} from 'react-redux'
import Logout from './Logout'


function App(props){
  // console.log(props)
  // console.log('app', props.user)
  return(
    <BrowserRouter>
      <h3>Welcome</h3>
      {
        Object.keys(props.user).length === 0 ?(
          <nav className="navbar navbar-light bg-light">
          <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to = "/">home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to = "/login">login</Link>
                </li>
              </ul>
            </div>
          </nav>
        ):(
          <div>
            <nav className="navbar navbar-light bg-light">
              <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to = "/">home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/posts">posts</Link><br/>
                    </li>
                    <li className="nav-item">
                      <Link to = "/logout">logout</Link>
                    </li>
                  </ul>
                </div>
          </nav>
          </div>
        )
      }
      
      <Route path = "/login" component = {Login} exact = {true}/>  
      <Route path = "/posts" component = {Post}/>
      <Route path = "/logout" component = {Logout}/>
    </BrowserRouter>
  )
}
const mapStateToProps = (state)=>{
  // console.log('state', state)
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
