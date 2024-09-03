import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {heroImage} from './blog.module.css'

const BlogPost = ({data, children})=>{
    console.log(data)
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (<Layout pageTitle={data.mdx.frontmatter.title}>
        <GatsbyImage
            className={heroImage}
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
        />
        <p>{data.mdx.frontmatter.date}</p>
        {children}
    </Layout>)
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost;