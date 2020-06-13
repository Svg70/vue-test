<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__sign-wrapper">
        <font-awesome-icon :icon="faTimes" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BlockComponent",
  props: {
    id: Number,
    title: String,
    height: Number,
    width: Number,
    isCollapsed: Boolean,
    // coordinates: {
    //   x: Number,
    //   y: Number,
    //  },
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faTimes,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  width: 400px;

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    background-color: #c5cdb5;

    .header__sign-wrapper {
      display: flex;
      justify-content: center;
      border: 1px solid black;
      align-items: center;
      height: 30px;
      width: 30px;
      border-radius: 15px;
      cursor: pointer;
    }
  }
}
</style>
