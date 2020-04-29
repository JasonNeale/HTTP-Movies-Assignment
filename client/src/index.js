// External imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Asset imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Local imports
import App from './App'


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))