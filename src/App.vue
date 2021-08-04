<template>
  <section class="container">
    <header class="header">
      <h1>
        COLORS
        <span style="display: block"> Version 2.2.1 </span>
      </h1>
    </header>
    <ColorList :colors="colors" />
    <ColorMenu :colors="colors" />
  </section>
</template>

<script>
import colors from "./colors";
import ColorList from "./components/ColorList.vue";
import ColorMenu from "./components/ColorMenu.vue";
export default {
  components: { ColorList, ColorMenu },
  setup() {
    return { colors };
  },
};
</script>
