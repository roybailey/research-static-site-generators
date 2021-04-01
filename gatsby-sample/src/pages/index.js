import React from "react"
import Link from "gatsby-link";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <div style={{margin: `3rem auto`, maxWidth: 600, color: `purple`}}>
                <h1>Hello Gatsby!</h1>
                <p>What a world.</p>
                <Link to="/about/">About</Link>
                <Link to="/about-css-modules/">About CSS Modules</Link>
                <img src="https://source.unsplash.com/random/400x200" alt=""/>
                <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
                <p>
                    What do I like to do? Lots of course but definitely enjoy building
                    websites.
                </p>
            </div>
        </Layout>
    );
}
