import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.css"
import '../../static/images/beach_img.jpg'
import '../../static/images/rocket_img.jpg'

const IndexPage = () => {
  const [isPhoto, setIsPhoto] = useState(true)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <article class="main">
          <section className="main-image">
            <img
              className="hero-image"
            alt="home image"
              src={isPhoto ?
                "//images.ctfassets.net/e7boqj0q3hkc/6yB7tkGVlXDixd8petmuq1/95e78061d6713f167ae7568d3d9753ab/beach_img.jpg"
                : "//images.ctfassets.net/e7boqj0q3hkc/5tR7dHo5KBQQp1bCASYkaZ/ffc0797dbf5f3518ffe5ca895a34a7cc/rocket_img.jpg"}
            />
          </section>
          <section className="main-content">
            <article onMouseEnter={() => setIsPhoto(true)} className="main-titles" id="photography">
              <h2 className="home-title">PHOTOGRAPHY</h2>
              <p className="home-info">Let's capture all your important moments.</p>
              <Link to="/photo" id="photo-cta" className="home-cta">MORE</Link>
            </article>
            <article onMouseEnter={() => setIsPhoto(false)} className="main-titles" id="development">
              <h2 className="home-title">DEVELOPEMENT</h2>
              <p className="home-info">Let's build something beautiful.</p>
              <Link to="/dev" id="dev-cta" className="home-cta">MORE</Link>
            </article>
          </section>
        </article>
        <article id="why-me">
          <section className="why-me-item">
            <h3 className="why-me-title">Knowledgeable</h3>
            <img
              className="why-me-img"
              src="//images.ctfassets.net/e7boqj0q3hkc/7mrJq6XACuusJRyW4gISXj/fc1ed55e2c599027f76b7965c0f864b5/undraw_education_f8ru.png"
              alt="knowledgeable"
            />
            <p className="why-me-desc">Anything you need, I can do.</p>
          </section>
          <section className="why-me-item">
            <h3 className="why-me-title">Quick</h3>
            <img
              className="why-me-img"
              src="//images.ctfassets.net/e7boqj0q3hkc/4JH8bFvzm6MuKeuNIKPeQx/e26fbdf4d192fd54d2bd2eca17a75bfc/undraw_package_arrived_63rf.png"
              alt="quick"
            />
            <p className="why-me-desc">I can return a finished project in most deadlines</p>
          </section>
          <section className="why-me-item">
            <h3 className="why-me-title">Flexible</h3>
            <img
              className="why-me-img"
              src="//images.ctfassets.net/e7boqj0q3hkc/Xil61cBSvdVoXZeOYKblP/8c2caa3b85ce3233977bc09e9b80ed4e/undraw_Online_collaboration_re_bkpm.png"
              alt="flexible"
            />
            <p className="why-me-desc">I can work with you to meet and exceed your goals and expectations.</p>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
