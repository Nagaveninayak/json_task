import {axios} from '../Axios'
import swal from 'sweetalert'

export const setUser = (user)=>{
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const startLogin = (formData, redirect)=>{
    return(dispatch)=>{
        axios.get('/users')
        .then((response)=>{
            // console.log('response', response.data)
            dispatch(setUser(response.data))
            const userEmail = response.data.map((user)=>{
                return user.email
            })
            const result = userEmail.find((email)=>{
                return email === formData.email
            })
            // console.log(result)
            if(result){
                swal("login", "success")
                localStorage.setItem('email', result)
                redirect()
            }else{
                swal("wrong email", "error")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const setLogout = ()=>{
    return{
        type: 'LOGOUT'
    }
}

export const startLogout = ()=>{
    return(dispatch)=>{
        localStorage.removeItem('email')
        setLogout()
        window.location.href = "/login"
    }
}