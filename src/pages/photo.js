import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './css/photo.css'

const Photo = ({data}) => {
  const posts = data.allContentfulPhotoPost.edges

  return (
    <Layout>
      <SEO title="Photography" />
      <h2 className="page-title">Photography</h2>
      <p className="page-description">I started my photography journey 11 years ago when I was a freshman in high school. I immediately fell in love with taking pictures of anything and everything. I've photographed anything from cars, people, sports, to events like weddings, even engagements and newborn announcements! If there is anything you need, I have done it before.</p>
      <div className="photo-container">
        {posts.map(({ node: post }) => (
          <div className="photo-post">
            <h3 className="photo-title">{post.title}</h3>
            <img className="photo-img" src={post.image.file.url}></img>
          </div>
        ))}
      </div>
    
    </Layout>
  )
}

export default Photo

export const pageQuery = graphql`
    query {
        allContentfulPhotoPost {
            edges {
                node {
                    title
                    image {
                      file {
                        url
                      }
                    }
                }
            }
        }
    }
`