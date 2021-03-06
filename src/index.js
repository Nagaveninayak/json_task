import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
