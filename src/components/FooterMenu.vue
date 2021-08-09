<template>
  <div
    class="footer-menu__background"
    :class="{ 'footer-menu__background--active': isVisible }"
    @click="close"
  ></div>
  <div class="footer-menu" :class="{ 'footer-menu--active': isVisible }">
    <a
      href="https://github.com/yeun/open-color#how-to-use"
      target="__blank"
      class="footer-menu__title"
      >How to use this color?</a
    >
    <h5 class="footer-menu__subtitle">Variable</h5>
    <div class="btn-group">
      <button class="btn" @click="copyVariable(1)">Sass, SCSS</button>
      <button class="btn" @click="copyVariable(2)">Less</button>
      <button class="btn" @click="copyVariable(3)">Stylus</button>
      <button class="btn" @click="copyVariable(4)">CSS</button>
    </div>
  </div>
</template>

<script>
// import Notify from "@reliutg/buzz-notify";
export default {
  name: "FooterMenu",
  emits: ["close"],
  props: {
    isVisible: { type: Boolean, default: false },
  },
  setup(_props, { emit }) {
    const copyVariable = (code) => {
      console.log(code);
    };

    const close = ({ target }) => {
      const targetClass = "footer-menu__background--active";
      const hasClass = target.classList.contains(targetClass);
      if (hasClass) {
        target.classList.remove(targetClass);
      }
      emit("close", !hasClass);
    };

    // Notify({
    //   title: "COPIED!",
    //   html: `<div style="text-align:center">${colorFormatted}</div>`,
    //   position: "top center",
    // });

    return { copyVariable, close };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.footer-menu {
  position: fixed;
  z-index: 11;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid rgb(229, 231, 235);
  background-color: rgb(255, 255, 255);
  transform: translateY(100%);
  transition: transform 0.3s ease;
  padding: 1rem;
}
.footer-menu--active {
  transform: translateY(0);
}
.footer-menu__background {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(100%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.footer-menu__background--active {
  transform: translateY(0);
  background-color: rgba(255, 255, 255, 0.5);
}
.footer-menu__title {
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-decoration: none;
}
.footer-menu__subtitle {
  color: rgb(107, 114, 128);
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.btn {
  background-color: rgb(255, 255, 255);
  border-color: rgb(229, 231, 235);
  border-radius: 0.25rem;
  border-width: 1px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: rgb(75, 85, 99);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-right: 0.25rem;
  cursor: pointer;
}
.btn:hover {
  background-color: rgba(255, 255, 255, 0.479);
}
</style>
