<template>
  <div id="sidemenu">
    <button
      class="sidemenu__btn"
      v-on:click="navOpen = !navOpen"
      v-bind:class="{ active: navOpen }"
    >
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>
    <transition name="translateX">
      <nav class="color-menu" v-show="navOpen">
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
    </transition>
  </div>
</template>

<script>
export default {
  name: "ColorMenu",

  props: {
    colors: {
      type: Object,
      required: true,
    },
    navOpen: false,
  },
};
</script>
<style scoped>
.color-menu {
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

nav {
  width: 200px;
  background: white;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
}
.sidemenu__btn {
  display: block;
  width: 50px;
  height: 50px;
  background: rgb(223, 222, 222);
  border: none;
  position: fixed;
  z-index: 100;
  bottom: 0;
  right: 0;
  appearance: none;
  cursor: pointer;
  outline: none;
}
.dark .sidemenu__btn,.dark .sidemenu__btn.active  {
  background-color: #161b22;
}
.dark .sidemenu__btn span {
  background: white;
}
.sidemenu__btn span {
  display: block;
  width: 20px;
  height: 2px;
  margin: auto;
  background: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
}
.sidemenu__btn.active{
    background: white;
}
.sidemenu__btn .top {
  transform: translateY(-8px);
}
.sidemenu__btn .bottom {
  transform: translateY(8px);
}
.sidemenu__btn.active .top {
  transform: rotate(-45deg);
}
.sidemenu__btn.active .mid {
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}
.sidemenu__btn.active .bottom {
  transform: rotate(45deg);
}
.sidemenu__wrapper {
  padding-top: 50px;
}

.sidemenu_list {
  padding-top: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidemenu__btn {
        display: none;
    }
@media screen and (max-width: 768px) {
    .sidemenu__btn {
        display: block;
    }
}
.translateX-enter {
  transform: translateX(200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}
.translateX-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
