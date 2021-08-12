<template>
  <section class="container">
    <Header />
    <ColorList :colors="colors" />
    <ColorMenu :colors="colors" />
    <div id="notify"></div>
    <DarkToggle />
  </section>
</template>

<script>
import colors from "./colors";
import Header from "./components/Header.vue";
import ColorList from "./components/ColorList.vue";
import ColorMenu from "./components/ColorMenu.vue";
import DarkToggle from "./components/DarkToggle.vue";

export default {
  name: "App",
  components: { Header, ColorList, ColorMenu, DarkToggle },
  setup() {
    return { colors };
  },
};
</script>
