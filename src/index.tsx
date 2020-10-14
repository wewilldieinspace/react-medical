import React from 'react'
import { render } from 'react-dom'
import './index.scss'
import 'simplebar/dist/simplebar.min.css';
import 'react-calendar/dist/Calendar.css';
import { App } from './app'


render(
    <App />,
    document.querySelector('#root')
)

