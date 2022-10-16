<template>
  <div
    class="footer-menu__background"
    :class="{ 'footer-menu__background--active': isVisible }"
    @click="close"
  ></div>
  <div class="footer-menu" :class="{ 'footer-menu--active': isVisible }">
    <div class="footer-menu__left">
      <div class="color-preview" :style="{ backgroundColor: color }"></div>
    </div>
    <div class="footer-menu__right">
      <a
        href="https://github.com/yeun/open-color#how-to-use"
        target="__blank"
        class="footer-menu__title"
        >How to use this color?</a
      >
      <h5 class="footer-menu__subtitle">Variable</h5>
      <div class="btn-group">
        <button
          class="btn"
          @click="$emit('click', { type: 'variable', value: 0 })"
        >
          Sass, SCSS
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'variable', value: 1 })"
        >
          Less
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'variable', value: 2 })"
        >
          Stylus
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'variable', value: 3 })"
        >
          CSS
        </button>
      </div>
      <h5 class="footer-menu__subtitle">Format</h5>
      <div class="btn-group">
        <button
          class="btn"
          @click="$emit('click', { type: 'format', value: 0 })"
        >
          HEX#
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'format', value: 1 })"
        >
          HEX
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'format', value: 2 })"
        >
          RGB
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'format', value: 3 })"
        >
          RGBA
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'format', value: 4 })"
        >
          HSL
        </button>
        <button
          class="btn"
          @click="$emit('click', { type: 'format', value: 5 })"
        >
          HSLA
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMenu",
  emits: ["close", "click"],
  props: {
    isVisible: { type: Boolean, default: false },
    color: { type: String, required: true },
  },
  setup(_props, { emit }) {
    const close = ({ target }) => {
      const targetClass = "footer-menu__background--active";
      const hasClass = target.classList.contains(targetClass);
      if (hasClass) {
        target.classList.remove(targetClass);
      }
      emit("close", !hasClass);
    };
    return { close };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.footer-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
@media screen and (max-width: 760px) {
    .footer-menu {
      flex-direction: column;
    }  
  }
.dark .footer-menu {
  background-color: #161b22;
  border-color: #22282f;
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
  box-shadow: inset 0 0 #0000, inset 0 0 #0000,
    inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: rgb(75, 85, 99);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-right: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: rgb(249, 250, 251);
}
.color-preview {
  width: 375px;
  height: 125px;
}
</style>
