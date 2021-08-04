<template>
  <section class="container">
    <Header />
    <ColorList :colors="colors" />
    <ColorMenu :colors="colors" />
  </section>
</template>

<script>
import colors from "./colors";
import Header from "./components/Header.vue";
import ColorList from "./components/ColorList.vue";
import ColorMenu from "./components/ColorMenu.vue";

export default {
  components: { ColorList, ColorMenu, Header },
  setup() {
    return { colors };
  },
};
</script>
