import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/dev.css"

const Dev = ({data}) => {
  const posts = data.allContentfulDevProject.edges

  return (
    <Layout>
      <SEO title="Development" />
      <section className="container">
        <article className="dev-info">
          <h2 className="page-title">Development</h2>
          <p className="page-description">Ever since I was little I've been fascinated with anything and everything to do with the internet. I remember getting a "How to Build Websites: For Dummies" in the early 2000's. Ever since then, I've always wanted to build websites. Now that I'm older, I taught myself how to build anything I or anybody else could want.</p>
        </article>
        <section className="dev-container">
          {posts.map(({ node: post }) => (
            <a target="_blank" className="" href={post.url}>
              <article className="dev-post">
                <img className="dev-img" src={post.screenshot.file.url} />
                <section className="dev-content">
                  <h3 className="dev-title">{post.projectTitle}</h3>
                  <div className="dev-description" dangerouslySetInnerHTML={{__html: post.description.childContentfulRichText.html}}></div>
                  <p className="dev-link"><a className="link dev-link" target="__blank" href={post.githubUrl}>GitHub Repo</a></p>
                </section>
              </article>
            </a>
          ))}
        </section>
      </section>
      {/* <section className="info-container">
        <h2 className="page-title">Development Projects</h2>
        <p className="page-description">Ever since I was little I've been fascinated with anything and everything to do with the internet. I remember getting a "How to Build Websites: For Dummies" in the early 2000's. Ever since then, I've always wanted to build websites. Now that I'm older, I taught myself how to build anything I or anybody else could want.</p>
      </section>
      <section className="dev-container">
        {posts.map(({ node: post }) => (
          <a target="_blank" className="" href={post.url}>
            <article className="dev-post">
              <h3 className="dev-title">{post.projectTitle}</h3>
              <img className="dev-img" src={post.screenshot.file.url} />
              <div className="dev-description" dangerouslySetInnerHTML={{__html: post.description.childContentfulRichText.html}}></div>
              <p className="dev-link"><a className="link dev-link" target="__blank" href={post.githubUrl}>GitHub</a> Repo</p>
            </article>
          </a>
        ))}
      </section> */}
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
            githubUrl
          }
        }
      }
    }
`