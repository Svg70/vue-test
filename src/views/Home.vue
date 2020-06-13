<template>
  <div class="home">
    <block-component />
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
