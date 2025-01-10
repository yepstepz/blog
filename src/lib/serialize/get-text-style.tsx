import type { ReactElement } from 'react'

export const IS_BOLD = 1
export const IS_ITALIC = 1 << 1
export const IS_STRIKETHROUGH = 1 << 2
export const IS_UNDERLINE = 1 << 3
export const IS_SUBSCRIPT = 1 << 5
export const IS_SUPERSCRIPT = 1 << 6

export const styles = [
  { value: IS_BOLD, cb: (children: ReactElement): ReactElement => <b>{children}</b> },
  { value: IS_ITALIC, cb: (children: ReactElement): ReactElement => <i>{children}</i> },
  { value: IS_STRIKETHROUGH, cb: (children: ReactElement): ReactElement => <s>{children}</s> },
  { value: IS_UNDERLINE, cb: (children: ReactElement): ReactElement => <u>{children}</u> },
  { value: IS_SUBSCRIPT, cb: (children: ReactElement): ReactElement => <sub>{children}</sub> },
  { value: IS_SUPERSCRIPT, cb: (children: ReactElement): ReactElement => <sup>{children}</sup> },
]

export const getTextStyle = (format: number, text: ReactElement) => {
  let resultHTML: ReactElement = text;
  styles.forEach(({ value, cb}) => {
    if (format === value || ((value & format) !== 0)) {
      resultHTML = cb(resultHTML);
    }
  })

  return resultHTML
}
