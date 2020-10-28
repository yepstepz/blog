import { PODCASTS_TYPE, POST_TYPE } from './constants'

export const isPodcastsType = (type) => type === PODCASTS_TYPE

export const findTypeOfPost = (categories) => {
    return categories.nodes.map((cat) => cat.slug).includes(PODCASTS_TYPE) ? PODCASTS_TYPE : POST_TYPE;
}
