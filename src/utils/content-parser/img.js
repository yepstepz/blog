import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

export const PostImage = (props) => {
    const {
        src,
        alt
    } = props
    const { allWpMediaItem } = useStaticQuery(graphql`
      query {
        allWpMediaItem {
          edges {
            node {
              sourceUrl
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)
    const image = allWpMediaItem.edges.find(({node}) => node?.localFile?.childImageSharp?.fluid?.base64 === src)
    return image == null || image.node.localFile.childImageSharp == null ? (
        <img
            src={src}
            alt={alt}
        />
    ) : (
        <Img
            fluid={image.node.localFile.childImageSharp.fluid}
            alt={alt}
            />
    )
}

export const getImage = node => {
    if (node.name === 'img') {
        return node
    } else if (node.children != null) {
        for (let index = 0; index < node.children.length; index++) {
            let image = getImage(node.children[index])
            if (image != null) return image
        }
    }
}

export const parseImage = (node) => {
    const image = getImage(node)
    if (image != null) {
        return <PostImage src={image.attribs.src} alt={image.attribs.alt}/>
    }
}
