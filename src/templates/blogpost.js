import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/blogpost.css'

const BlogPost = ({data}) => {
    const post = data.contentfulBlogPost

    return (
        <Layout>
            <SEO title={post.title} />
            <div className="container">
                <h2 className="post-title">{post.title}</h2>
                <img className="post-image" src={post.image.file.url} />
                <p className="pub-date">{post.publishDate}</p>
                <div className="body-container"
                    dangerouslySetInnerHTML={{__html: post.childContentfulBlogPostBodyRichTextNode.childContentfulRichText.html}}>
                </div>

            </div>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishDate(formatString: "MMM Do, YYYY")
            childContentfulBlogPostBodyRichTextNode {
                childContentfulRichText {
                    html
                }
                id
            }
            image {
                file {
                    url
                }
            }
            tags
            slug
        }
    }
`