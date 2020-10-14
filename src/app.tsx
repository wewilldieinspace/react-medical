import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// Components
import { Header } from './components/header/header'
import { Nav } from './components/nav/nav'


export const App = () => {

    return (
        <Router>
            <Header />
            <Nav />
            <main className="main">
                <Switch>
                </Switch>
            </main>
        </Router>
    )
}