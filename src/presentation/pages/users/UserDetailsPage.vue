<template>
  <div>User {{ this.$route.params.id }} Détails</div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  components: {},
})
export default class UserDetailsPage extends Vue {
  override created(): void {
    console.log(`userDetails with id ${this.$route.params.id}`);
  }
}
</script>