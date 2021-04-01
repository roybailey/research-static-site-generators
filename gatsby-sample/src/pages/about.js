import React from "react"
import Header from "../components/header";
import Container from "../components/container";
import Layout from "../components/layout";

export default function About() {
    return (
        <Layout>
            <Container>
                <Header headerText="About Gatsby"/>
                <Header headerText="It's pretty cool"/>
                <p>Such wow. Very React.</p>
            </Container>
        </Layout>
    )
}
