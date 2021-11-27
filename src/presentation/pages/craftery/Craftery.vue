<template>
  <h1 class="p-2"><i class="fas fa-gavel"></i> Craftery</h1>
  <hr>
  <h2 class="p-2">Items</h2>
  <hr>
  <div class="container-fluid">
    <div class="row">
        <div class="col" v-for="(item , key) in items" :key="key" >
           {{item}}
        </div>
    </div>

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