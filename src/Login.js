import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from './actions/userAction'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: ''
        }
    }

   handleLogin = (e)=>{
       this.setState({[e.target.name]: e.target.value})
   }

   handleSubmit = (e)=>{
       e.preventDefault()
       const formData = {
           email: this.state.email
       }
       //sconsole.log('formData', formData)
       //console.log('props', this.props)
       const redirect = ()=>{
           this.props.history.push('/posts')
       }
       this.props.dispatch(startLogin(formData, redirect))
   }

    render(){
        return(
            <div className = "container"><br/><br/>
                <form onSubmit = {this.handleSubmit}>
                <div className =" form-outline mb-3">
                    <input 
                            type = "text"
                            placeholder = "Enter email"
                            name = "email"
                            value = {this.state.email}
                            onChange = {this.handleLogin}
                        />
                </div>
                <input type = "submit" value = "Login" className = "btn btn-primary"/>  
                </form><br/><br/>
               
            </div>
        )
    }
}

export default connect()(Login)
