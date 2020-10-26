import { createSelector } from 'reselect'

const allWpPostData = (data) => data.allWpPost || []

export const WpPostNodesSelector = createSelector(
    allWpPostData,
    (data) => data.nodes || []
)
