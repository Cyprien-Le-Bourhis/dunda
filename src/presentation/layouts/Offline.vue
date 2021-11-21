import DefaultLayout from '@/presentation/layouts/Default.vue';
<template>
  <div class="d-flex flex-column flex-lg-row h-100" id="OfflineLayout">
    <section class="ml-lg-auto"><slot /></section>
  </div>
</template>

<script lang="ts">
import { Options, mixins } from "vue-class-component";
import theme from '@/presentation/mixins/theme.mixin'

@Options({
  name: "offline",
})
export default class offlineLayout extends mixins(theme) {

}

</script>

<style lang="scss" scoped>

</style>

