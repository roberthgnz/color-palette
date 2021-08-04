<template>
  <header class="header">
    <h1 class="header-title">
      COLOR PALLETE
      <span class="version"> Version 3.0.0 </span>
    </h1>
    <FormatSelector />
  </header>
</template>

<script>
import FormatSelector from "./FormatSelector.vue";

export default {
  components: { FormatSelector },
  name: "Header",
};
</script>

<style scoped>
.header-title {
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  border-bottom: 1px solid #dee2e6;
}

.version {
  display: block;
  color: #868e96;
  font-size: 0.8rem;
}
</style>
