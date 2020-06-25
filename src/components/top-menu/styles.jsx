import React from "react"
import styled from "@emotion/styled"

export const List = styled("ul")`
  display: flex;
  list-style: none;
  padding: 20px 0;
  margin: 0;
`

export const Item = styled("li")`
  &:not(:last-child) {
    padding-right: 10px;
  }
`
