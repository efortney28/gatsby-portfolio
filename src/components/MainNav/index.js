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
                <Link className="brand-link" to="/">
                    <span className="medium-text title">ERIC FORTNEY </span> 
                </Link>
                <span className="light-text subtitle">|   PHOTOGRAPHER / WEB DEVELOPER</span>
                
            </div>
            <HamburgerEmphatic
                className="menu-button"
                buttonColor="#4E5266"
                barColor="#FFF"
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