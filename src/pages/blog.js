import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import './css/blog.css'

const Blog = ({data}) => {
    const posts = data.allContentfulBlogPost.edges

    return (
        <Layout>
            <SEO title="Blog" />
            <h2 className="page-title">Blog</h2>
            <div className="blog-container">
                {posts.map(({ node: post }) => (
                    <Link className="link" to={'/blog/' + post.slug}>
                        <div className="blog-post">
                            <h3 className="blog-title">{post.title}</h3>
                            {/* <p className="blog-published">{post.publishDate.slice(0,10)}</p> */}
                            <img className="blog-img" src={post.image.file.url}></img>
                            <div className="blog-description" dangerouslySetInnerHTML={{__html: post.excerpt.excerpt}}></div>
                        </div>
                    </Link>
                ))}
            </div>
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