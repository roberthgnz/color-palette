<template>
  <div class="color-list">
    <template v-for="(value, key) in colors" :key="key">
      <h3 class="color-title" :id="key">{{ key }}</h3>
      <div class="color-group">
        <div
          v-for="(color, index) in value"
          :key="color"
          class="color-info"
          :title="`Copy color ${color}`"
        >
          <div
            class="color-background"
            :id="color"
            :style="{ backgroundColor: color }"
          ></div>
          <h4 class="color-name">{{ key }} {{ index + 1 }}</h4>
          <span class="color-value">{{ color }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
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

.color-group .color-info {
  margin-bottom: 2rem;
}

.color-group .color-info .color-background {
  position: relative;
  width: 100%;
  height: 80px;
  cursor: pointer;
}

.color-group .color-info .color-background .btn {
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

.color-group .color-info .color-name {
  padding: 0.5rem 0;
  text-transform: uppercase;
}

.color-group .color-info .color-value {
  color: #868e96;
}

.color-group .color-info:hover .btn {
  display: block;
}
</style>
