import React from "react"
import {css} from "@emotion/react"
import {useStaticQuery, Link, graphql} from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


export default function Layout({children}) {
    const data = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 1024, padding: `0 1rem` }}>
            <header style={{marginBottom: `1.5rem`}}>
                <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                    <h1 style={{display: `inline`}}>{data.site.siteMetadata.title}</h1>
                </Link>
                <ul style={{listStyle: `none`, float: `right`}}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/about-css-modules/">About CSS Modules</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                    <ListLink to="/my-files/">My Files</ListLink>
                </ul>
            </header>
            {children}
        </div>
    )
}
