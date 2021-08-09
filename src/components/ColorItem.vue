<template>
  <div class="color-item">
    <div
      class="color-background"
      :style="{ backgroundColor: value }"
      @click="copyColor(value)"
    ></div>
    <h4 class="color-name">{{ name }}</h4>
    <span class="color-value">{{ getColorFormatted(colorFormat, value) }}</span>
    <FooterMenu :isVisible="isFooterMenuVisible" @close="handleClose" />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { copyToClipboard } from "../helpers/copyToClipboard";
import { getColorFormatted } from "../helpers/getColorFormatted";

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
  },
  setup() {
    const store = useStore();
    const colorFormat = computed(() => store.state.colorFormat);
    const isFooterMenuVisible = ref(false);

    const copyColor = (color) => {
      const colorFormatted = getColorFormatted(colorFormat.value, color);
      copyToClipboard(colorFormatted, () => {
        isFooterMenuVisible.value = true;
      });
    };

    const handleClose = (isVisible) => (isFooterMenuVisible.value = isVisible);

    return {
      colorFormat,
      copyColor,
      getColorFormatted,
      isFooterMenuVisible,
      handleClose,
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
