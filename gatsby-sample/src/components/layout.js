import React from "react"
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
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              excerpt
            }
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
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <ListLink key={node.id}>
                            <h3>
                                {node.frontmatter.title}{" "}
                                <span> — {node.frontmatter.date}</span>
                            </h3>
                            <p>{node.excerpt}</p>
                        </ListLink>
                    ))}
                </ul>
            </header>
            {children}
        </div>
    )
}


