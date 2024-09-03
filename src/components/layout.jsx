import React from 'react';
import {container, headerTitle, myLink, navBar} from './layout.module.css'
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"

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
                <Link to="/" style={{"textDecoration": "none"}}>
                    <header className={headerTitle}>{data.site.siteMetadata.title}</header>
                </Link>
                <div className={navBar}>
                    <Link className={myLink} to="/">Home</Link>
                    <Link className={myLink} to="/about">About</Link>
                    <Link className={myLink} to="/blog">Blog</Link>
                    <Link className={myLink} to="/game">Game</Link>
                </div>
            {children}
        </div>
    </>)
}

export default Layout;