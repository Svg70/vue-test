<template>
  <div class="home">
    <div class="wrapper">
      <drag
        v-for="(n, index) in items"
        class="drag"
        :key="n.id"
        :data="n.id"
        :style="{top: n.y+'px', left: n.x+'px', height: '100px', position: 'absolute', zIndex: index}"
        @dragstart="dragstart"
        @dragend="dragend"
      >
        <block-component :title="n.title" />
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
        { x: 0, y: 0, id: 1, title: 'Title 1' },
        { x: 10, y: 10, id: 2, title: 'Title 2' },
        { x: 20, y: 20, id: 3, title: 'Title 3' },
        { x: 30, y: 30, id: 4, title: 'Title 4' },
        { x: 40, y: 40, id: 5, title: 'Title 5' },
      ],
      dragging: false,
    };
  },
  methods: {
    dragend(event) {
      console.log(event)
      this.dragging = false;
      const block = this.items.find(item => item.id === event.data);
      block.x = /* parseInt( */event.position.x/*  / 10, 10) * 10 */
      block.y = /* parseInt( */event.position.y/*  / 10, 10) * 10 */
    },
    dragstart(event) {
      const block = this.items.find(item => item.id === event.data);
      this.items = [block, ...this.items.filter(item => item.id !== block.id)]
      this.dragging = event.data;
    },
    drop(event) {
      console.log(event);
    },
  },
};
</script>
