import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faGithub, faTwitter, faFlickr } from '@fortawesome/free-brands-svg-icons'

import '../styles/socialIcons.css'

const SocialIcons = () => {
    const icons = [
        {
            name: 'facebook',
            img: faFacebookSquare,
            link: 'https://www.facebook.com/efortneydev',
        },
        {
            name: 'instagram',
            img: faInstagram,
            link: 'https://www.instagram.com/efortneyphoto/',
        },
        {
            name: 'github',
            img: faGithub,
            link: 'https://github.com/efortney28',
        },
        {
            name: 'twitter',
            img: faTwitter,
            link: 'https://twitter.com/EFortney',
        },
        {
            name: 'flickr',
            img: faFlickr,
            link: 'https://www.flickr.com/photos/efortney28/',
        }
    ]
    return (
        <section className="social-icons-container">
            {icons.map((icon) => (
                <a target="_blank" className="social-icon-link" href={icon.link}><FontAwesomeIcon icon={icon.img} /></a>
            ))}
        </section>
    )
}

export default SocialIcons