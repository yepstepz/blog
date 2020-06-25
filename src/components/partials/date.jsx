import React from "react"
import styled from "@emotion/styled"
import dayjs from "dayjs"

export const DateComponent = ({time, className}) => (
    <time className={className} dateTime={time}>{dayjs(time).format("DD-MM-YYYY")}</time>
)

export const Date = styled(DateComponent)`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 25px;
  font-style: italic;
  color: #616161;
`
