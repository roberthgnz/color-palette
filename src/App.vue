<template>
  <section class="container">
    <h1>
      COLORS
      <span style="display: block"> Version 2.2.1 </span>
    </h1>
    <ul id="menu-colors">
      <li v-for="(value, key) in colors" :key="key">
        <a :href="`#${key}`"><span :class="`badge-${key}`"></span>{{ key }}</a>
      </li>
    </ul>
    <h2></h2>
    <div id="colors">
      <div v-for="(value, key) in colors" :key="key">
        <h3 class="color-title" :id="key">{{ key }}</h3>
        <div class="color-group" :data-color="key">
          <div
            v-for="(color, index) in value"
            :key="color"
            class="color-c"
            :title="`Copy color ${color}`"
          >
            <div
              class="color-bg"
              :id="color"
              :style="{ backgroundColor: color }"
            ></div>
            <h4 class="color-name">{{ key }} {{ index + 1 }}</h4>
            <span class="color-type">{{ color }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import colors from "./colors";
export default {
  setup() {
    console.log(colors);
    return { colors };
  },
};
</script>
