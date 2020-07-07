import React from "react"
import styled from "@emotion/styled"
import 'dayjs/locale/ru' // load on demand
import dayjs from 'dayjs'

import { MAX_MOBILE_MEDIA_QUERY } from '../../../utils/breakpoint-constants'

import {
    StyledDay,
    StyledMonth
} from './index.styles'

export const MainPageDateComponent = ({time, className}) => {

    const formattedDate = dayjs(time)
        .locale('ru')
        .format("DD MMMM")
        .split(' ')

    const [ formattedDay, formattedMonth ] = formattedDate

    return (
        <time className={className} dateTime={time}>
            <StyledDay>{ formattedDay }</StyledDay>
            <StyledMonth>{ formattedMonth }</StyledMonth>
        </time>
    );
}

export const MainPageDate = styled(MainPageDateComponent)`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 25px;
  color: #616161;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1;
  margin-right: 45px;
  ${ MAX_MOBILE_MEDIA_QUERY } {
      padding-top: 0;
      flex-direction: row;
      text-align: left;
      justify-content: flex-start;
      align-items: flex-end;
  }
`
