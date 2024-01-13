const textAlignFormats = ['center', 'left', 'right'];

export const getTextIndent = (indent, format, defaultIndentStep = 8) => {
  const styles = {};

  if (textAlignFormats.includes(format)) {
    styles['text-align'] = format;
  }

  if (indent > 0) {
    styles['text-indent'] = `${indent * defaultIndentStep}px`;
  }

  return styles;
}
