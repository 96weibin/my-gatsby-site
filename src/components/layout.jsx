import React from 'react';
import {container, headerTitle} from './layout.module.css'
import { graphql, useStaticQuery } from 'gatsby';

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql
        `query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }`
    )


    return(<>
        <div className={container}>
            <h1>{pageTitle}</h1>
            <header className={headerTitle}>{data.site.siteMetadata.title}</header>
            {children}
        </div>
    </>)
}

export default Layout;