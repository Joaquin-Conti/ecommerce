import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinkItem(props) {
    return (
        <li>
            <NavLink to={props.to}>{props.children}</NavLink>
        </li>
    )
}
