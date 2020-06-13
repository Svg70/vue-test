<template>
  <div class="home">
    <block-component msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import BlockComponent from "@/components/BlockComponent.vue";

export default {
  name: "Default",
  components: {
    BlockComponent,
  },
};
</script>
