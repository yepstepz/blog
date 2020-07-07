import React from 'react'
import styled from "@emotion/styled"
import { Link } from 'gatsby'

export const TagList = styled.ul(`
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
    display: flex;
`)

export const TagItem = styled.li(`
    margin: 0;
`)

export const StyledLink = styled(Link)(`
    display: block;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: rgb(209, 0, 104);
    text-decoration: none;
`)
