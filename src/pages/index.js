import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <>
      <h1>Hi, welcome to my site!</h1>
      <Link to="/about">goto</Link>
    </>
  )
}

export default IndexPage

export const Head = () => (<>
  <title>home page</title>
  <link rel="icon" href="/images/icon.png" type="image/ico" />
</>)
