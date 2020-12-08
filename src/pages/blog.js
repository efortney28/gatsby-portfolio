import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialIcons from '../components/socialIcons'

import '../styles/blog.css'

const Blog = ({data}) => {
    const posts = data.allContentfulBlogPost.edges

    return (
        <Layout>
            <SEO title="Blog" />
            <article className="container">
                <section className="page-info">
                    <section className="social">
                        <p className="page-description">Follow me on social media!</p>
                        <SocialIcons />
                    </section>
                </section>
                <section className="blog-container">
                    {posts.map(({ node: post }) => (
                        <section className="blog-post">
                            <Link className="link" to={'/blog/' + post.slug}>
                                <img className="blog-img" src={post.image.file.url}></img>
                                <article className="blog-content">
                                    <h3 className="blog-title">{post.title}</h3>
                                    {/* <p className="blog-published">{post.publishDate.slice(0,10)}</p> */}
                                    <div className="blog-description" dangerouslySetInnerHTML={{__html: post.excerpt.excerpt}}></div>
                                </article>
                            </Link>
                        </section>
                    ))}
                </section>
            </article>
        </Layout>
    )
    
}

export default Blog

export const pageQuery = graphql`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    childContentfulBlogPostBodyRichTextNode {
                        childContentfulRichText {
                            html
                        }
                        id
                    }
                    excerpt {
                        excerpt
                    }
                    image {
                        file {
                            url
                        }
                    }
                    title
                    publishDate
                    tags
                    slug
                }
            }
        }
    }
`