// Audio when click on color
let click = new Audio();
click.src = "stapler.mp3";

// Variables for the buttons and color-type options
const colorTypes = { 0: 'HEX#', 1: 'HEX', 2: 'RGB', 3: 'RGBA', 4: 'HSL', 5: 'HSLA' };
let colorType = colorTypes[0];
let formatButton = document.querySelector(".dropdown__btn");
let formatList = document.querySelector(".dropdown__content");
let formatTypeBtns = document.querySelectorAll(".dropdown__option");

// Opens/closes the options popup
function handleFormatsOpen() {
  formatList.classList.toggle("dropdown__content_visible");
}

// Changes the format type to be copied
function changeCopyFormat(evt) {
  colorType = colorTypes[evt.target.value];
  formatButton.textContent = `Copy Format: ${evt.target.textContent}`;
}

// Event listener for color format button
formatButton.addEventListener("click", handleFormatsOpen)
// This listener closes the popup if you click off of it
document.addEventListener("click", (evt) => {
  if (!evt.target.classList.contains("dropdown__btn") && formatList.classList.contains("dropdown__content_visible")) {
    handleFormatsOpen();
  }
});

// Adds listeners for all the color format options
formatTypeBtns.forEach((type) => {
  type.addEventListener("click", (evt) => {
    handleFormatsOpen()
    changeCopyFormat(evt);
  })
});

// This function computes the new formatted color value and returns it
function getColorFormatted(col) {
  let rgb;

  switch (colorType) {
    case 'HEX#':
      return col;
    case 'HEX':
      return col.slice(1);
    case 'RGB':
    case 'RGBA':
      rgb = col.slice(1).match(/../g);
      rgb = rgb.map((i) => parseInt(i,16));
      if (colorType === 'RGB') {
        return `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      } else {
        return `(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1.0)`;
      }
    case 'HSL':
    case 'HSLA':
      rgb = col.slice(1).match(/../g);
      rgb = rgb.map((i) => parseInt(i,16)/255);
      let r = rgb[0], g = rgb[1], b = rgb[2];
      let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), h = 0, s = 0, l = 0;
      let delta = cmax - cmin;

      if (delta == 0) {
        h = 0;
      } else if (cmax == r) {
        h = ((g - b) / delta) % 6;
      } else if (cmax == g) {
        h = ((b - r) / delta) + 2;
      } else {
        h = ((r - g) / delta) + 4;
      }

      h = Math.round(h * 60);

      if (h < 0) {
        h += 360;
      }
      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : (delta / (1 - Math.abs(2 * l - 1)));
      s = +(s * 100).toFixed(0);
      l = +(l * 100).toFixed(0);

      if (colorType === 'HSL') {
        return `(${h}, ${s}%, ${l}%)`;
      } else {
        return `(${h}, ${s}%, ${l}%, 1.0)`;
      }
  }
  return col;
}

btn.forEach((el) => {
  el.addEventListener("click", copyColor);
});

async function copyColor() {
  let color = getColorFormatted(this.getAttribute("id"));
  try {
    let title = ls("h2");
    title.innerText = color;
    title.classList.add("show");
    click.play();
    await navigator.clipboard.writeText(color);

    setTimeout(() => title.classList.remove("show"), 500);
  } catch (error) {}
}
