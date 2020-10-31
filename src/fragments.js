import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const WpPost = graphql`
  fragment WpPost on WpPostConnection {
    edges {
      node {
        categories {
          nodes {
            id
            name
            slug
            uri
          }
        }
        tags {
          nodes {
              name
              uri
              count
          }
        }
        date
        id
        title
        uri
        isSticky
        slug
        tags {
          nodes {
            id
            name
            uri
            slug
          }
        }
        excerpt
      }
    }
  }
`

export const WpCategory = graphql`
    fragment WpCategory on WpCategoryConnection {
        edges {
            node {
                id
                name
                uri
            }
        }
    }
`
