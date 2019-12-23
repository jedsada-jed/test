export const getPathFromHyperlink = (hyperlink) => {
  // example: "<a href=\"https://maps.google.com/maps/contrib/102085882852180795760\">Korakot Indranoi</a>"
  return result = hyperlink.substring(9, 58)
}