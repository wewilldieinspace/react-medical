import React from 'react'

interface PropsI {
    type: string,
    title: string,
    description: string | string[]
}

export const Card = ({ title, type, description }: PropsI) => {
    return (
        <li className={ `card__item card__item--${type}`}>
            <div className="card__item__info">
                <h2 className='card__item__title'>{ title }</h2>
                <hr/>
                {
                    typeof description === 'string' ? (
                        <p className='card__item__description'>
                            { description }
                        </p>
                    ) : (
                        <ul className='description__list'>
                            {
                                description.map(list_item => {
                                    return (
                                        <li
                                            key={ list_item }
                                            className='description__list__list-item'
                                        >{ list_item }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>
            <div className='card__icon' />
        </li>
    )
}