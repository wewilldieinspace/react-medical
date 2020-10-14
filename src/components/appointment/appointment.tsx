import React from 'react'
// Hooks
import { useDate } from '../../hooks/date.hook'
// Types
import { AppointmentPropsI } from '../../types'



export const Appointment = ({ name, photo, type, date, location }: AppointmentPropsI) => {
    const [day, time, shortDate] = useDate(date)

    return (
        <li className='appointment'>
            <h3
                className='appointment__date'>
                {`${day} ${shortDate} | ${time}`}
            </h3>
            <p
                className="appointment__location">
                { location }
            </p>
            <div
                className="appointment__doctor">
                <div
                    className='appointment__doctor__photo'
                    style={{ backgroundImage: `url(${photo})` }}
                />
                <div
                    className='appointment__doctor__name'>
                    <h3>{ name }</h3>
                    <span
                        className="appointment__doctor__type">
                        { type }
                    </span>
                </div>
                <button
                    className='appointment__cancel'>
                    Отменить
                </button>
            </div>
        </li>
    )
}