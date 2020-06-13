<template>
  <div class="home">
    <div class="wrapper">
      <drag
        v-for="n in items"
        class="drag"
        :key="n.id"
        :data="n.id"
        :style="{top: n.x+'px', left: n.y+'px', height: '100px', position: 'absolute', zIndex: n.id}"
        @dragstart="dragend"
        @dragend="dragstart"
      >
        <block-component />
      </drag>
      <drop class="grid" @drop="drop"></drop>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 0 10px 10px 10px;
  position: relative;
}
.grid {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.25);
}
</style>

<script>
// @ is an alias to /src
import BlockComponent from "@/components/BlockComponent.vue";
import { Drag, Drop } from "vue-easy-dnd";

export default {
  name: "Default",
  components: {
    BlockComponent,
    Drag,
    Drop,
  },
  data() {
    return {
      items: [
        { x: 0, y: 0, id: 1 },
        { x: 10, y: 10, id: 2 },
        { x: 20, y: 20, id: 3 },
        { x: 30, y: 30, id: 4 },
        { x: 40, y: 40, id: 5 },
      ],
      dragging: false,
    };
  },
  methods: {
    dragend(event) {
      if (event.data === 1) {
        console.log(event);
        this.dragging = false;
      }
    },
    dragstart(event) {
        console.log(event, event.data);
      if (event.data === 1) {
        console.log(event);
        this.dragging = event.data;
      }
    },
    drop(event) {
      console.log(event);
    },
  },
};
</script>
