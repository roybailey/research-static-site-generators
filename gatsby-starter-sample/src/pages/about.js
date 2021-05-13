import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header";
import Container from "../components/container";
import Layout from "../components/layout";

export default function About({ data }) {
    return (
        <Layout>
            <Container>
                <h1>{data.site.siteMetadata.title}</h1>
                <Header headerText="About ${data.site.siteMetadata.title}"/>
                <Header headerText="It's pretty cool"/>
                <p>Such wow. Very React.</p>
            </Container>
        </Layout>
    )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

