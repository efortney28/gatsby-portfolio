import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import './css/dev.css'

const Dev = ({data}) => {
  const posts = data.allContentfulDevProject.edges

  return (
    <Layout>
      <SEO title="Development" />
      <h2 className="page-title">Development Projects</h2>
      <p className="page-description">Ever since I was little I've been fascinated with anything and everything to do with the internet. I remember getting a "How to Build Websites: For Dummies" in the early 2000's. Ever since then, I've always wanted to build websites. Now that I'm older, I taught myself how to build anything I or anybody else could want.</p>
      <section className="dev-container">
        {posts.map(({ node: post }) => (
          <a target="_blank" className="link" href={post.url}>
            <article className="dev-post">
              <h3 className="light-text dev-title">{post.projectTitle}</h3>
              <img className="dev-img" src={post.screenshot.file.url} />
              <div className="light-text dev-description" dangerouslySetInnerHTML={{__html: post.description.childContentfulRichText.html}}></div>
            </article>
          </a>
        ))}
      </section>
    
    </Layout>
  )
}

export default Dev

export const pageQuery = graphql`
    query {
      allContentfulDevProject {
        edges {
          node {
            projectTitle
            screenshot {
              file {
                url
              }
            }
            excerpt {
              excerpt
            }
            description {
              childContentfulRichText {
                html
              }
            }
            url
          }
        }
      }
    }
`