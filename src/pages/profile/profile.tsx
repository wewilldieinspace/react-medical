import React from 'react'
// Components
import { Appointment } from '../../components/appointment/appointment'
import { Card } from '../../components/card/card'
import { DetailsBtn } from '../../components/details-btn/details-btn'
// Types
import { AppointmentsArrayI } from '../../types'
// Data
import { cardInfo } from '../../data/data'



export const Profile = ({ appointments, error, loading, length }: AppointmentsArrayI) => {

    if (loading) {
        return (
            <p>Наберись терпения!</p>
        )
    }
    if (error) {
        return (
            <p>Мы облажались :(( ({error})</p>
        )
    }
    return (
        <>
            <section className='appointment-list'>
                <h2 className='page-title'>Записи на прием</h2>
                <ul>
                    {
                        !loading && !error && (
                            appointments.map(el => {
                                const { id, name, photo, date, type, location } = el
                                return (
                                    <Appointment
                                        key={id}
                                        name={name}
                                        photo={photo}
                                        type={type}
                                        date={date}
                                        location={location}
                                    />
                                )
                            })
                        )
                    }
                    {
                        length! > 2 && (
                            <DetailsBtn
                                length={ length }
                            />
                        )
                    }
                </ul>
            </section>
            <section className='card'>
                <h2 className='page-title'>Электронная карта</h2>
                <ul>
                    {
                        cardInfo.map(el => {
                            const { id, title, type, description } = el
                            return (
                                <Card
                                    key={id}
                                    title={ title }
                                    type={ type }
                                    description={ description }
                                />
                            )
                        })

                    }
                </ul>
            </section>
        </>
    )
}