<template>
  <LayoutInjector />
</template>


<script lang="ts">

import "@/presentation/scss/app.scss"
import { Options, Vue } from "vue-class-component";
import LayoutInjector from "@/presentation/router/LayoutInjector.vue"
import { SimpleDI } from "typescript-simple-di";

@Options({
  components: {
    LayoutInjector
  }
})
export default class App extends Vue {
 override created() {
      SimpleDI.get("CheckTokenCookieUC").execute()
  }
}
</script>