import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

export const PostImage = ({src, alt}) => {
    const {allWordpressWpMedia} = useStaticQuery(graphql`
      query {
        allWordpressWpMedia {
          edges {
            node {
              source_url
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
    const originalSource = src.replace(/^(http?s:\/\/.+?\/.+?)-(\d+x\d+)\.(.+?)$/g, '$1.$3')
    const image = allWordpressWpMedia.edges.find(({node}) => node.source_url === originalSource)
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
