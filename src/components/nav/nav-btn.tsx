import React from 'react'
import { NavLink } from 'react-router-dom'
// Types
import { NavigationIconsT } from '../../types'

interface PropsI {
    title: string,
    type: NavigationIconsT
}


export const NavBtn = ({ title, type }: PropsI) => {

    const link = '/' + type
    return (
        <li>
            <NavLink
                className={ `${type} nav__item` }
                activeClassName={ `${type}-active nav__btn--active` }
                to={ link }
            >
                { title }
            </NavLink>
        </li>
    )
}