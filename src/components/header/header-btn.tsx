import React, { useState } from 'react'
// Types
import { HeaderIconsT } from '../../types'



export const HeaderBtn = ({ type }: { type: HeaderIconsT }) => {
    const [isOpen, setOpen] = useState(false)

    const openModalHandler = () => {
        setOpen(true)
    }
    return (
        <li
            className={`${ type ? 'header__nav__btn--' + type : null } header__nav__btn`}
        >
            <div />
            {
                isOpen && (
                    <div style={{ width: '50px', minHeight: '50px', backgroundColor: 'pink' }}>
                        <p>You have no notification yet :((</p>
                    </div>
                )
            }
        </li>
    )
}