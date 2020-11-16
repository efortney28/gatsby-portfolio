import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import Menu from './Menu'
import { HamburgerEmphatic } from 'react-animated-burgers'

import './nav.css'

const MainNav = () => {
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Development',
            path: '/dev',
        },
        {
            name: 'Photography',
            path: '/photo',
        },
        {
            name: 'Blog',
            path: '/blog',
        }
    ]
    const [isActive, setIsActive ] = useState(false)
    
    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
    )

    return (
        <nav>
            <div className="brand">
                <Link className="home-link" to="/">
                    <span className="orange-text">Eric</span>
                    <span className="light-text">Fortney</span>
                </Link>
            </div>
            <HamburgerEmphatic
                className="menu-button"
                buttonColor="#2D4059"
                barColor="#EEEEEE"
                buttonWidth={25}
                {...{ isActive, toggleButton }}
            />
            {isActive && (
                <Menu links={links} />
            )}
            
        </nav>
    )
}

export default MainNav