<template>
  <div class="wrapper">
    <div class="header">
      <div v-if="isLabel" class="header__pull-area" />
      <div class="header__sign-wrapper" @click="isBlockInfo = !isBlockInfo">
        <font-awesome-icon :icon="faCaretDown" />
      </div>
      <div class="header__sign-wrapper" @click="closeBlock">
        <font-awesome-icon :icon="faTimes" />
      </div>
    </div>
    <div v-if="isBlockInfo" class="block-info"></div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
      isBlockInfo: false,
      isLabel: true,
      faTimes,
      faCaretDown,
    };
  },
  methods: {
    closeBlock() {
      //$store.dispatch()
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    background-color: #c5cdb5;
    padding-right: 10px;

    .header__sign-wrapper {
      display: flex;
      justify-content: center;
      border: 1px solid black;
      align-items: center;
      height: 30px;
      width: 30px;
      margin-right: 10px;
      border-radius: 15px;
      cursor: pointer;

      :last-child {
        margin-right: 0;
      }
    }

    .header__pull-area {
      position: absolute;
      top: 0;
      left: -30px;
      height: 100%;
      width: 30px;
      background-color: grey;
      cursor: pointer;
    }
  }

  .block-info {
    min-height: 100px;
    background-color: rgb(168, 186, 168);
  }
}
</style>
