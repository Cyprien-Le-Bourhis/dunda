<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { Options, mixins } from "vue-class-component";
import theme from '@/presentation/mixins/theme.mixin'

// imports Layouts 
import OfflineLayout from '@/presentation/layouts/Offline.vue'
import DefaultLayout from '@/presentation/layouts/Default.vue'
import WithFooterLayout from '@/presentation/layouts/WithFooter.vue'

@Options({
  components: {
    'offline-layout': OfflineLayout,
    'default-layout': DefaultLayout,
    'with-footer-layout': WithFooterLayout
  },
  // watch: {
  //   layout(val) {
  //     let layoutName = val.replace('-layout', '')
  //     document.body.setAttribute('data-layout', layoutName)
  //   }
  // }
})
export default class LayoutInjector extends mixins(theme) {
  get layout(): string {
    return ( this.$route.meta.layout || 'default' ) + '-layout'
  }
}

</script>