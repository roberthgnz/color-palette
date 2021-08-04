<template>
  <div class="color-item" :title="`Copy color ${value}`">
    <div class="color-background" :style="{ backgroundColor: value }"></div>
    <h4 class="color-name">{{ name }}</h4>
    <span class="color-value">{{ value }}</span>
  </div>
</template>

<script>
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
