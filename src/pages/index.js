import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="JS Projects"></SEO>
    <header className="hero">
      <h1>vanilla javascript projects</h1>
    </header>
    <Projects />
  </Layout>
)

export default IndexPage
