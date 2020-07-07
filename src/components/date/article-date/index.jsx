import React from "react"
import styled from "@emotion/styled"
import 'dayjs/locale/ru' // load on demand
import dayjs from 'dayjs'

export const ArticleDateComponent = ({time, className}) => (
    <time className={className} dateTime={time}>
        {dayjs(time)
            .locale('ru')
            .format("DD MMMM YYYY")
        }
    </time>
)

export const ArticleDate = styled(ArticleDateComponent)`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
`
