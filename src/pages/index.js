import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import SEO from "../components/seo"
import { graphql } from "gatsby"
const url =
  "https://www.udemy.com/course/javascript-tutorial-for-beginners-w/?referralCode=DD9FA6C0D976918D3E1C"
const IndexPage = ({
  data: {
    allAirtable: { nodes: projects },
  },
}) => {
  const formattedProjects = projects.map(project => {
    return {
      id: project.id,
      ...project.data,
      image: project.data.image.localFiles[0].childImageSharp.fluid,
    }
  })
  const domProjects = formattedProjects
    .filter(project => project.type === "dom")
    .sort((a, b) => a.order - b.order)
  const apiProjects = formattedProjects
    .filter(project => project.type === "api")
    .sort((a, b) => a.order - b.order)

  const es6Projects = formattedProjects
    .filter(project => project.type === "es6")
    .sort((a, b) => a.order - b.order)
  const storeProjects = formattedProjects
    .filter(project => project.type === "store")
    .sort((a, b) => a.order - b.order)

  return (
    <Layout>
      <SEO title="Javascript Projects"></SEO>
      <header className="hero">
        <h1>vanilla javascript projects</h1>
      </header>
      <div className="course-link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          start course
        </a>
      </div>
      <Projects title="dom projects" projects={domProjects} />
      <Projects title="basic API projects" projects={apiProjects} />
      <Projects title="ES6 projects" projects={es6Projects} />
      <Projects title="e-commerce project" projects={storeProjects} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(sort: { fields: data___order, order: ASC }) {
      nodes {
        data {
          url
          type
          order
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
