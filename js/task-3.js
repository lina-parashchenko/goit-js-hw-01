function getElementWidth(content, padding, border) {
     return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}
console.log(getElementWidth("50px", "8px", "4px"));