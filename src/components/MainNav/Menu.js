import React from 'react'
import { Link } from "gatsby"

import './menu.css'

const Menu = (props) => {
    const { links } = props

    return(
        <div className="menu-container">
            {links.map((link, ind) => (
                <Link activeStyle={{color: "#FF5722"}} className="menu" to={link.path} key={ind}>{link.name}</Link>
            ))}
        </div>
    )
}

export default Menu