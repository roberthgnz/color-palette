<template>
  <nav class="color-menu">
    <ul class="color-menu-list">
      <li class="color-menu-item" v-for="(value, key) in colors" :key="key">
        <a :href="`#${key}`">
          <span
            class="color-menu-badge"
            :style="{ backgroundColor: colors[key][7] }"
          ></span
          >{{ key }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ColorMenu",
  props: {
    colors: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.color-menu {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  background-color: #ffffff;
}

.dark .color-menu {
  background-color: #161b22;
}

.color-menu-list {
  display: flex;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap;
}

.color-menu-list .color-menu-item {
  display: inline-block;
  margin: 0.5rem;
}

.color-menu-list a {
  text-decoration: none;
  color: #868e96;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s ease-out;
}

.color-menu-list .color-menu-badge {
  display: inline-block;
  margin-top: -2px;
  margin-right: 10px;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  vertical-align: middle;
}
</style>
