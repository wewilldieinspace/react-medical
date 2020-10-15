import React from 'react'
import { Link } from 'react-router-dom'


export const DetailsBtn = ({ length }: { length: number | undefined }) => {
    const n = length?.toString().split('')
    const i = Number(n![n!.length - 1])
    console.log(window.location.pathname)

    return (
        <div className='details-link'>
            <p>
                Еще { length! - 2 }
                { i === 3 ? ' запись' : null }
                { i === (4 || 5) ? ' записи' : null }
                { i > 5 ? ' записей' : null }
            </p>
            <Link to={`${window.location.pathname}/details`}>Подробнее</Link>
        </div>
    )
}