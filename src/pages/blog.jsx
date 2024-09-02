import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
const Blog = ()=>{
    const blogData = useStaticQuery(graphql`{
    allFile {
        nodes {
        name
        }
    }
    }`)
    const blogs = blogData.allFile.nodes.map((x ,i)=> <li key={i}>{x.name}</li>)
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