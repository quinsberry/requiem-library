export default (text: string, actualFontSize: number, actualTextLength: number) => {
  if (text) {
    return Math.min(actualFontSize, (actualTextLength / text.length) * actualFontSize)
  }
  return actualFontSize
}
