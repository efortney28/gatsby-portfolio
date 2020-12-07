import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

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

const BlogPost = ({data}) => {
    const post = data.contentfulBlogPost

    return (
        <Layout>
            <SEO title={post.slug} />
            <small className="trail"><Link className="link-back" to="/blog">blog</Link> > <span className="trail-color">{post.slug}</span></small>
            <div className="blog-post-container">
                <img className="post-image" src={post.image.file.url} />
                <h2 className="post-title">{post.title}</h2>
                <p className="pub-date">Published: <small>{post.publishDate}</small></p>
                {/* <div className="tags-container">
                    {post.tags.map((tag) => (
                        <p className="tag">{tag}</p>
                    ))}
                </div> */}
                <div className="body-container"
                    dangerouslySetInnerHTML={{__html: post.childContentfulBlogPostBodyRichTextNode.childContentfulRichText.html}}>
                </div>

            </div>
        </Layout>
    )
}

export default BlogPost