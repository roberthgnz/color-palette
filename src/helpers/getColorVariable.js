/**
 * Variable Convention
 * @param {Number} index 0 to 3. Index of variable template.
 * @param {String} color Color name such as gray, red, lime, etc.
 * @param {Number} number 0 to 9. Brightness spectrum.
 */
export const getColorVariable = (index, color, number) => {
  // oc: Abbreviation for Open color
  const templates = [
    "$oc-(color)-(number)",
    "@oc-(color)-(number)",
    "oc-(color)-(number)",
    "--oc-(color)-(number)",
  ];
  return templates[index].replace("(color)", color).replace("(number)", number);
};
