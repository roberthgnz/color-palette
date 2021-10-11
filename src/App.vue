<template>
  <section class="container">
    <Header />
    <ColorList :colors="colors" />
    <ColorMenu :colors="colors" />
    <div id="notify"></div>
    <DarkToggle />
    <HamBurgerMenu :colors="colors" />
  </section>
</template>

<script>
import colors from "./colors";
import Header from "./components/Header.vue";
import ColorList from "./components/ColorList.vue";
import ColorMenu from "./components/ColorMenu.vue";
import DarkToggle from "./components/DarkToggle.vue";
import HamBurgerMenu from './components/HamburgerMenu.vue';

export default {
  name: "App",
  components: { Header, ColorList, ColorMenu, DarkToggle, HamBurgerMenu},
  setup() {
    return { colors };
  },
};
</script>
