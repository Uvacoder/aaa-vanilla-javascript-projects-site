import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Seo from "../components/seo"
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  const formattedProjects = projects.map((project) => {
    return {
      id: project.id,
      ...project.data,
      image: project.data.image.localFiles[0].childImageSharp.gatsbyImageData,
    }
  })
  const domProjects = formattedProjects
    .filter((project) => project.type === "dom")
    .sort((a, b) => a.order - b.order)
  const restProjects = formattedProjects
    .filter((project) => project.type === "rest")
    .sort((a, b) => a.order - b.order)
  return (
    <>
      <Seo title="Javascript Projects" />
      <Hero />
      <Projects title="DOM projects" projects={domProjects} />
      <Projects title="Course Exclusive" projects={restProjects} />
    </>
  )
}

export const query = graphql`
  {
    allAirtable(sort: { fields: data___order, order: ASC }) {
      nodes {
        id
        data {
          name
          order
          type
          url
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
