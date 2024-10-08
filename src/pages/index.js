import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="">

        <Kitten width={200} height={200} ph={'哈哈哈哈哈'}></Kitten>
        <StaticImage src="../images/icon.png" width={40} height={40} alt="xxx"/>

      </Layout>
      
    </>
  )
}

export default IndexPage

export const Head = () => (<>
  <Seo title="Home page"></Seo>
  <link rel="icon" href="/images/icon.png" type="image/ico" />
</>)


export const Kitten = ({width, height, ph}) =>{
  var imgStyle = { width, height }
  return <StaticImage imgStyle={imgStyle} src="https://www.gatsbyjs.com/static/5b3d5aedde3f9fe6f43af137058f2031/4ef49/index-page-with-static-image-from-filesystem.png" title={ph} alt="A kitten"/>
}