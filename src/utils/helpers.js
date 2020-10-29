import { PODCASTS_TYPE, POST_TYPE } from './constants'

export const isPodcastsType = (type) => type === PODCASTS_TYPE

export const findTypeOfPost = (categories) => {
    return categories.nodes.map((cat) => cat.slug).includes(PODCASTS_TYPE) ? PODCASTS_TYPE : POST_TYPE;
}

export const truncate = (str, n) => {
    if (str.length <= n) {
        return str
    }
    let truncated = str.substr(0, n)
    if (str.charAt(n) === ' ') {
        return `${truncated}...`
    }
    return `${truncated.substr(0, truncated.lastIndexOf(' '))}...`
}
