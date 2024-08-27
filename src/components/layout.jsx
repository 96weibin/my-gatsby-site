import React from 'react';
import {container} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return(<>
        <div className={container}>
            <h1>{pageTitle}</h1>

            {children}
        </div>
    </>)
}

export default Layout;