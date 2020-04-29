import React from "react"
import Image from "gatsby-image"

const Project = ({ image, title, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project">
      <article>
        <Image fluid={image.fluid} alt={title}></Image>
        <div className="project-footer">
          <h4>{title}</h4>
        </div>
      </article>
    </a>
  )
}

export default Project
