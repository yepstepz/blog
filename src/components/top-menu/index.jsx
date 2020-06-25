import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'

import {List, Item} from "./styles";
import {Wrapper} from "../../styles/layout";

const TopMenu = (data) => (
        <Wrapper>
            <StaticQuery
                query={graphql`
            {
                wordpressMenusMenusItems(slug: {eq: "top-menu"}) {
                  items {
                    title
                    url
                  }
                }
            }
        `}
                render={
                    ({wordpressMenusMenusItems: {items}}) =>
                        (

                            <List>
                                {
                                    items.map(({title, url, slug}) => (
                                        <Item>
                                            <Link
                                                to={url}
                                            >
                                                {title}
                                            </Link>
                                        </Item>
                                    ))
                                }
                                <Item>
                                    <a href='https://yepstepz.io'>
                                        На сайт
                                    </a>
                                </Item>
                            </List>
                        )
                }
            />
        </Wrapper>
)

export default TopMenu
