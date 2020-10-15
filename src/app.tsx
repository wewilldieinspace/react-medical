import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// Hooks
import { useHttp } from './hooks/http.hook'
// Components
import { Header } from './components/header/header'
import { Nav } from './components/nav/nav'
// Pages
import { Profile } from './pages/profile/profile'
import { Details } from './pages/details/details'


export const App = () => {
    const [appointments, setAppointments] = useState([])
    const { request, loading, error } = useHttp()

    const [path, setPath] = useState(
        window.location.pathname === '/profile' ? (
        './_data/data.json' ) : '../_data/data.json'
    )

    const fetchAppointments = useCallback( async () => {
        try {
            const res = await request(path)
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
                    <Route exact path='/profile/details'>
                        <Details
                            appointments={ appointments }
                            loading={ loading }
                            error={ error }
                        />
                    </Route>
                    <Redirect exact from='/' to='/profile' />
                </Switch>
            </main>
        </Router>
    )
}