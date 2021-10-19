import React from 'react'
import {connect} from 'react-redux'
import { startLogout } from './actions/userAction'
import swal from 'sweetalert'

function Logout(props){
    // console.log('logout', props)
    const handleLogout = ()=>{
        swal({
            title: "Are you sure to logout?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then(()=>{
                props.dispatch(startLogout())
            })
      
    }
    return(
        <div className = "container"><br/>
            <p>To logout click the below button !</p>
            <button onClick = {()=>{handleLogout()}} className = "btn btn-primary">logout</button>
            
        </div>
    )
}
export default connect()(Logout)