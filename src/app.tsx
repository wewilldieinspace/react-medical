import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// Hooks
import { useHttp } from './hooks/http.hook'
// Components
import { Header } from './components/header/header'
import { Nav } from './components/nav/nav'
// Pages
import { Profile } from './pages/profile/profile'


export const App = () => {
    const [appointments, setAppointments] = useState([])
    const { request, loading, error } = useHttp()

    const fetchAppointments = useCallback( async () => {
        try {
            const res = await request('./_data/data.json')
            setAppointments(res)
        } catch (e) {
            console.log('error: ', e.message)
        }
    }, [request])

    useEffect(() => {
        fetchAppointments()
    }, [fetchAppointments])

    return (
        <Router>
            <Header />
            <Nav />
            <main className="main">
                <Switch>
                    <Route exact path='/profile'>
                        <Profile
                            appointments={ appointments.slice(0, 2) }
                            loading={ loading }
                            error={ error }
                            length={ appointments.length }
                        />
                    </Route>
                    <Redirect exact from='/' to='/profile' />
                </Switch>
            </main>
        </Router>
    )
}