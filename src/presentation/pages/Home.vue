<template>
  <h1>Home page</h1>
</template>




<script lang="ts">
import { SimpleDI } from 'typescript-simple-di';
export default {
  async mounted(){
  console.log("item data",  await SimpleDI.get("GetItems").execute()
 )
  
  
  }

}
</script>

<style lang="scss" scoped>

</style>