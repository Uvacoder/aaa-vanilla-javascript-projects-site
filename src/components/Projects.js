import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Project from "./Project"

// projects center
const query = graphql`
  {
    jsProjects: allContentfulBasicJavascriptProject(
      sort: { fields: createdAt, order: ASC }
    ) {
      nodes {
        url
        title
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    course: contentfulCourses(title: { eq: "javascript" }) {
      title
      url
    }
  }
`

const Projects = () => {
  const {
    jsProjects: { nodes: projects },
    course: { url },
  } = useStaticQuery(query)

  return (
    <section className="section">
      <div className="course-link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          start course
        </a>
      </div>
      <div className="section-title">
        <h2>all projects</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {projects.map(item => {
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
