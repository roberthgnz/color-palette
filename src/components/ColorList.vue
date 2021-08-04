<template>
  <div class="color-list">
    <template v-for="(value, key) in colors" :key="key">
      <h3 class="color-title" :id="key">{{ key }}</h3>
      <div class="color-group">
        <ColorItem
          v-for="(color, index) in value"
          :key="color"
          :name="`${key} ${index + 1}`"
          :value="color"
        />
      </div>
    </template>
  </div>
</template>

<script>
import ColorItem from "./ColorItem.vue";

export default {
  components: { ColorItem },
  name: "ColorList",
  props: {
    colors: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.color-title {
  margin: 30px 0;
  font-size: 24px;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 1.5;
}

.color-group {
  display: grid;
}

@media (min-width: 575.98px) {
  .color-group {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 767.98px) {
  .color-group {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 991.98px) {
  .color-group {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
