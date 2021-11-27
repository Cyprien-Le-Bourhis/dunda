<template>
  <!-- navbar -->
  <div class="container-main">
    <MyNav />
    <!-- container -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MyNav from "../components/partials/SideNav.vue";

@Options({
  name: "default",
  components: { MyNav },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.container-main {
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>