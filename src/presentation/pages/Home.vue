<template>
  <h1>Home page</h1>
  <div>
    {{items}}
  </div>
</template>




<script lang="ts">
import { SimpleDI } from 'typescript-simple-di';
import { ref } from '@vue/reactivity';


export default {

  setup(){
    const items = ref([])
     async function fetchitems(){
        items.value  = await SimpleDI.get("GetItems").execute()
      }
    
    fetchitems()
   return {items}
  }

}
</script>

<style lang="scss" scoped>

</style>