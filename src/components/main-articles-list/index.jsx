import { ArticlesList } from './articles.styles'
import {ArticlePreview, ArticlesRow, LeftColumn, ReadAll, RightColumn, StyledTitle, StyledLink } from "./single-article.styles";
import {MainPageDate} from "../date/main-page-date";
import {TagsComponent} from "../tags";
import {truncate} from "../../utils/truncate";
import React from "react";

export const Articles = ({ posts = [] }) => (
    <ArticlesList>
        {posts.map((post) => (
            <ArticlesRow>
                <LeftColumn>
                    <MainPageDate time={post.date} />
                </LeftColumn>
                <RightColumn>
                    <TagsComponent tags={post.tags || []} />
                    <StyledLink to={post.path}>
                        <StyledTitle>{post.title}</StyledTitle>
                    </StyledLink>
                    <ArticlePreview dangerouslySetInnerHTML={{__html: truncate(post.excerpt, 250)}}/>
                    <ReadAll to={post.slug}>
                        Читать подробнее
                    </ReadAll>
                </RightColumn>
            </ArticlesRow>
        ))}
    </ArticlesList>
)
