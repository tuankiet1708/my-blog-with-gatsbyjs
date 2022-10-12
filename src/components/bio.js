/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter,
            facebook,
            linkedin,
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/my-profile.jpg"
        width={86}
        height={86}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          <br/>
          <a href={`https://facebook.com/${social?.facebook || ``}`}>
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#0C8EF1"/>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href={`https://www.linkedin.com/in/${social?.linkedin || ``}`}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0966C2"/>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#1C9BEF"/>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href={`https://github.com/${social?.github || ``}`}>
            <FontAwesomeIcon icon={faGithub} size="2x" color=""/>
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
