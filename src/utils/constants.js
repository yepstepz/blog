export const DESKTOP_WIDTH = 1180
export const LAPTOP_WIDTH = 1024
export const TABLET_WIDTH = 768
export const MOBILE_WIDTH = 480

export const MIN_DESKTOP_MEDIA = `@media (min-width: ${DESKTOP_WIDTH}px)`
export const MIN_LAPTOP_MEDIA = `@media (min-width: ${LAPTOP_WIDTH}px)`
export const MIN_TABLET_MEDIA = `@media (min-width: ${TABLET_WIDTH}px)`
export const MIN_MOBILE_MEDIA = `@media (min-width: ${MOBILE_WIDTH}px)`

export const MAX_DESKTOP_MEDIA = `@media (max-width: ${DESKTOP_WIDTH}px)`
export const MAX_LAPTOP_MEDIA = `@media (max-width: ${LAPTOP_WIDTH}px)`
export const MAX_TABLET_MEDIA = `@media (max-width: ${TABLET_WIDTH}px)`
export const MAX_MOBILE_MEDIA = `@media (max-width: ${MOBILE_WIDTH}px)`

export const SM = 'sm'
export const MD = 'md'
export const LG = 'lg'
export const XS = 'xs'

export const H1 = 'h1'
export const H2 = 'h2'
export const H3 = 'h3'

export const LAYOUT_POST_PAGE = 'layout-post-page'
export const isPostPage = (type) => type === LAYOUT_POST_PAGE


/*
320px — 480px: Mobile devices.
481px — 768px: iPads, Tablets.
769px — 1024px: Small screens, laptops.
 */

export const PODCASTS_TYPE = 'podcasts'
export const POST_TYPE = 'post'
export const MAIN_POST_TYPE = 'main-post-type'
export const MAIN_PODCAST_TYPE = 'main-podcast-type'
