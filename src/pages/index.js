import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
      <h1>Hi, welcome to my site!</h1>
      <Link to="/about">goto</Link>
      kitten
      <Kitten width={80} height={80} ph={'哈哈哈哈哈'}></Kitten>
      <StaticImage src="../images/icon.png" width={40} height={40}/>
    </>
  )
}

export default IndexPage

export const Head = () => (<>
  <title>home page</title>
  <link rel="icon" href="/images/icon.png" type="image/ico" />
</>)


export const Kitten = ({width, height, ph}) =>{
  var imgStyle = { width, height }
  return <StaticImage imgStyle={imgStyle} src="https://www.gatsbyjs.com/static/5b3d5aedde3f9fe6f43af137058f2031/4ef49/index-page-with-static-image-from-filesystem.png" title={ph} alt="A kitten"/>
}