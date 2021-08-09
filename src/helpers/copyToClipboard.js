export const copyToClipboard = (text, callback = null) => {
  function selectElementText(element) {
    if (document.selection) {
      const range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      const range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  }

  const element = document.createElement("div");
  element.textContent = text;
  document.body.appendChild(element);
  selectElementText(element);
  document.execCommand("copy");
  element.remove();
  if (callback !== null) callback();
};
