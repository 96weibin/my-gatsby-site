import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
const Blog = ({data})=>{
    let blogs = data.allMdx.nodes.map(x => (<>
        <article key={x.id}>
            <h2>{x.frontmatter.title}</h2>
            <p>{x.frontmatter.date}</p>
            <p>{x.excerpt}</p>
        </article>
    </>))
    return(
        <>
            <Layout>
                <h1>Blog page</h1>
                <ul>
                    {blogs}
                </ul>
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
      }
      excerpt(pruneLength: 30)
      id
    }
  }
}`;