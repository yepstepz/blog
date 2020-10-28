fragment post on allWpPost {
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
