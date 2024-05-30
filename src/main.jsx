import React from 'react'
import ReactDOM from 'react-dom/client'

import { FirsApp } from './components/FirstApp'
import './styles/styles.css'
import { CounterApp } from './counter/counterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={11110} />
    </React.StrictMode>
)