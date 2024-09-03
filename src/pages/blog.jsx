import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
const Blog = ({data})=>{
    let blogs = data.allMdx.nodes.map(x => (
        <article key={x.id}>
            <Link to={`/blog/${x.frontmatter.slug}`}>
                <h2>{x.frontmatter.title}</h2>
            </Link>
            <p>{x.frontmatter.date}</p>
            <p>{x.excerpt}</p>
        </article>))
    return(
        <>
            <Layout>
                {blogs}
            </Layout>
        </>
    )
}

export default Blog

const Head = () => <Seo title='My blog Posts'></Seo>

export const query = graphql`{
  allMdx {
    nodes {
      body
      frontmatter {
        title
        date
        some
        slug
      }
      excerpt(pruneLength: 10)
      id
    }
  }
}`;