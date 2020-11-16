import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialIcons from '../components/home/socialIcons'
import WorkingTogether from '../components/home/workingTogether'
import ContactForm from '../components/home/contactForm'

import './css/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img
      className="hero-image"
      src="//images.ctfassets.net/e7boqj0q3hkc/6Kc0NVx61rHYaT0AseWg45/fc808b6a6a61b0c93cb1f7cc426b8885/25082612552_308e684b75_o.jpg"
    ></img>

    <div className="intro-text-container">
      <h3 className="text-light">Hey there!</h3>
      <p className="text-light">I'm Eric Fortney. I take pictures and build websites!</p>
      <p className="text-light">Click below to find out more about me! :)</p>
    </div>

    <div className="buttons-container">
      <Link to="/dev" className="btn green-btn">Development</Link>
      <Link to="/photo" className="btn orange-btn">Photography</Link>
    </div>
    <SocialIcons />
    <WorkingTogether />
    <ContactForm />
  </Layout>
)

export default IndexPage
