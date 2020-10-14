import React from 'react'
// Components
import { NavBtn } from './nav-btn'


export const Nav = () => {
    return (
        <section className='nav'>
            <span>
                <h2 className='logo'>Логотип</h2>
            </span>
            <ul>
                <NavBtn
                    title='Профиль'
                    type='profile'
                />
                <NavBtn
                    title='Врачи и клиники'
                    type='medical'
                />
                <NavBtn
                    title='Сообщения'
                    type='messages'
                />
                <NavBtn
                    title='Тестирование'
                    type='tests'
                />
                <NavBtn
                    title='Полезно знать'
                    type='help'
                />
            </ul>
        </section>
    )
}