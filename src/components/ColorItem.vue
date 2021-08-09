<template>
  <div class="color-item">
    <div
      class="color-background"
      :style="{ backgroundColor: value }"
      @click="handleColor(value)"
    ></div>
    <h4 class="color-name">{{ name }}</h4>
    <span class="color-value">{{ getColorFormatted(colorFormat, value) }}</span>
    <FooterMenu
      :isVisible="isFooterMenuVisible"
      :color="value"
      @close="handleClose"
      @click="handleClick"
    />
  </div>
</template>

<script>
import Nofity from "@reliutg/buzz-notify";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { copyToClipboard } from "../helpers/copyToClipboard";
import { getColorFormatted } from "../helpers/getColorFormatted";
import { getColorVariable } from "../helpers/getColorVariable";

import FooterMenu from "./FooterMenu.vue";

export default {
  components: { FooterMenu },
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
    number: { type: Number, required: true },
  },
  setup(props) {
    const store = useStore();
    const colorFormat = computed(() => store.state.colorFormat);
    const isFooterMenuVisible = ref(false);

    const handleColor = (color) => {
      isFooterMenuVisible.value = true;
    };

    const handleClose = (isVisible) => (isFooterMenuVisible.value = isVisible);

    const handleClick = ({ type, value }) => {
      if (type === "variable") {
        const colorVariable = getColorVariable(
          value,
          props.name.split(" ")[0],
          props.number
        );
        Nofity({ title: "Copied!", position: "bottom center" });
        copyToClipboard(colorVariable);
      }
      if (type === "format") {
        const formats = ["HEX#", "HEX", "RGB", "RGBA", "HSL", "HSLA"];
        const colorFormatted = getColorFormatted(formats[value], props.value);
        Nofity({ title: "Copied!", position: "bottom center" });
        copyToClipboard(colorFormatted);
      }
    };

    return {
      colorFormat,
      handleColor,
      getColorFormatted,
      isFooterMenuVisible,
      handleClose,
      handleClick,
    };
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
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.5rem 0;
  margin: 0;
}

.color-item .color-value {
  color: #868e96;
}

.color-item:hover .btn {
  display: block;
}
</style>
