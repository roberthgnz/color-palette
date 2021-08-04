<template>
  <div class="format-selector">
    <button class="format-selector__btn">Copy Format: HEX - #AA1923</button>
    <div class="format-selector__content">
      <button class="format-selector__option" value="0">HEX - #AA1923</button>
      <button class="format-selector__option" value="1">HEX - AA1923</button>
      <button class="format-selector__option" value="2">RGB - (1, 2, 3)</button>
      <button class="format-selector__option" value="3">
        RGBA - (1, 2, 3, 1.0)
      </button>
      <button class="format-selector__option" value="4">
        HSL - (1, 2%, 3%)
      </button>
      <button class="format-selector__option" value="5">
        HSLA - (1, 2%, 3%, 1.0)
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormatSelector",
};
</script>

<style scoped>
/* This container holds the button and the list of choices */
.format-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
}

/* This is for the actual button that displays current choice */
.format-selector__btn {
  font-weight: normal;
  margin: 0 0 1rem;
  padding: 0.5rem 1.5rem;
  color: white;
  background-color: black;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

/* This is the popup box. Position is set just below the current location of the button */
.format-selector__content {
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 162px;
  width: 250px;
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 0.5rem grey;
  transition: visibility 0.25s linear, opacity 0.25s ease;
}
.format-selector__content_visible {
  visibility: visible;
  opacity: 1;
}

/* This is the styling for each option, i  */
.format-selector__option {
  padding: 1rem;
  /* width: 100%; */
  background-color: white;
  font-weight: normal;
  border: none;
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.2s ease, font-size 0.2s ease;
}

.format-selector__option:focus {
  outline: 0;
}

/* This is the hover color and font-size effect */
.format-selector__option:hover {
  background-color: darkgrey;
  font-size: 1.25rem;
}
</style>
