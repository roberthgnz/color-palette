<template>
  <div class="color-item" :title="`Copy color ${value}`">
    <div
      class="color-background"
      :style="{ backgroundColor: value }"
      @click="copyColor(value)"
    ></div>
    <h4 class="color-name">{{ name }}</h4>
    <span class="color-value">{{ getColorFormatted(colorFormat, value) }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { copyToClipboard } from "../helpers/copyToClipboard";

export default {
  name: "ColorItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const colorFormat = computed(() => store.state.colorFormat);

    // This function computes the new formatted color value and returns it
    const getColorFormatted = (colorType, color) => {
      let rgb;
      switch (colorType) {
        case "HEX#":
          return color;
        case "HEX":
          return color.slice(1);
        case "RGB":
        case "RGBA":
          rgb = color.slice(1).match(/../g);
          rgb = rgb.map((i) => parseInt(i, 16));
          if (colorType === "RGB") {
            return `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
          } else {
            return `(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1.0)`;
          }
        case "HSL":
        case "HSLA":
          rgb = color.slice(1).match(/../g);
          rgb = rgb.map((i) => parseInt(i, 16) / 255);
          let r = rgb[0],
            g = rgb[1],
            b = rgb[2];
          let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            h = 0,
            s = 0,
            l = 0;
          let delta = cmax - cmin;

          if (delta == 0) {
            h = 0;
          } else if (cmax == r) {
            h = ((g - b) / delta) % 6;
          } else if (cmax == g) {
            h = (b - r) / delta + 2;
          } else {
            h = (r - g) / delta + 4;
          }

          h = Math.round(h * 60);

          if (h < 0) {
            h += 360;
          }
          l = (cmax + cmin) / 2;
          s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
          s = +(s * 100).toFixed(0);
          l = +(l * 100).toFixed(0);

          return colorType === "HSL"
            ? `(${h}, ${s}%, ${l}%)`
            : `(${h}, ${s}%, ${l}%, 1.0)`;
      }
      return color;
    };

    const copyColor = (color) => {
      const colorFormatted = getColorFormatted(colorFormat.value, color);
      copyToClipboard(colorFormatted, () => console.log(colorFormatted));
    };

    return { colorFormat, copyColor, getColorFormatted };
  },
};
</script>

<style scoped>
.color-item {
  margin-bottom: 2rem;
}

.color-item .color-background {
  position: relative;
  width: 100%;
  height: 80px;
  cursor: pointer;
}

.color-item .color-background .btn {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  line-height: 50%;
  border: 2px solid #eeeeee;
  border-radius: 7px;
  transition: all 0.3s ease;
}

.color-item .color-name {
  padding: 0.5rem 0;
  text-transform: uppercase;
}

.color-item .color-value {
  color: #868e96;
}

.color-item:hover .btn {
  display: block;
}
</style>
