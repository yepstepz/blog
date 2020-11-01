import {PODCASTS_TYPE, MAIN_PODCAST_TYPE, POST_TYPE, MAIN_POST_TYPE} from './constants'

export const isPodcastsType = (type) => [PODCASTS_TYPE, MAIN_PODCAST_TYPE].includes(type)

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

export const getPostFromScheme = (posts) => posts?.edges?.map(post => post.node)
export const getCategoryFromScheme = (categories) => categories?.edges?.[0]?.node
export const getPodcastFromScheme = (podcasts) => podcasts?.edges?.map(podcast => podcast.node)


export const isMain = (type) => [MAIN_POST_TYPE, MAIN_PODCAST_TYPE].includes(type)
