import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Seo = ({title})=>{
    const data = useStaticQuery(graphql
        `query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }`
    )
        console.log(data)
    return (<>
        <title> {title} | {data.site.siteMetadata.title}</title>
    </>)
}

export default Seo