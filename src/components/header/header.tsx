import React from 'react'
// Components
import { HeaderBtn } from './header-btn'
// Files
import avatar from '../../assets/profile-avatar.png'



export const Header = () => {
    console.log(avatar)
    return (
        <header className='header'>
            <h1 className='header__title'>Мой профиль</h1>
            <ul className='header__nav'>
                <HeaderBtn
                    type='search'
                />

                <HeaderBtn
                    type='notification'
                />

                <HeaderBtn
                    type='eye'
                />

                <li className='header__avatar-halo'>
                    <div
                        className="header__avatar"
                        style={{ backgroundImage: `url(${ avatar })` }}
                    >
                    </div>
                </li>

                <HeaderBtn
                    type='sub-menu'
                />
            </ul>
        </header>
    )
}