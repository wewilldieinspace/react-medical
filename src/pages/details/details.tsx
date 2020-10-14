import React from 'react'
// Components
import SimpleBarReact from 'simplebar-react'
import { Appointment } from '../../components/appointment/appointment'
import Calendar from 'react-calendar'
// Types
import { AppointmentsArrayI } from '../../types'


export const Details = ({ appointments, loading, error }: AppointmentsArrayI) => {

    if (error) {
        return (
            <>
                <p>Теперь и живи с этим</p>
                <p>¯\_(ツ)_/¯</p>
                <p>{error}</p>
            </>
        )
    }
    if (loading) {
        return (
            <p>Будь терпеливей</p>
        )
    }
    return (
        <>
            <h2 className='page-title'>Мои записи</h2>
            <section className="details-page">
                <section className="appointments-list">
                    <SimpleBarReact
                        style={{ maxHeight: '654px' }}
                        forceVisible="y"
                        autoHide={false}
                    >
                        <ul>
                            {
                                appointments && appointments.length && (
                                    appointments.map(el => {
                                        const { id, name, photo, date, type, location } = el
                                        return (
                                            <Appointment
                                                key={id}
                                                name={name}
                                                photo={`.${photo}`}
                                                type={type}
                                                date={date}
                                                location={location}
                                            />
                                        )
                                    })
                                )
                            }
                        </ul>
                    </SimpleBarReact>
                </section>
                <section className="calendar">
                    <Calendar
                        maxDetail="month"
                        defaultView="month"
                        minDate={
                            new Date()
                        }
                    />
                </section>
            </section>
        </>
    )
}