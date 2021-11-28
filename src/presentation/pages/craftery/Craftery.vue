<template>
  <h1 class="p-2"><i class="fas fa-gavel"></i> Craftery</h1>
  <hr>
  <h2 class="p-2">Items</h2>
  <hr>
  <div class="container-fluid place ">
    <div class="row">
        <div class="col-auto text-center " v-for="(item , key) in items" :key="key" >
          <div :class="['_badge', item['rarety']]">
            <div class="_pattern"></div>
            <div class="_item">
              <i :class="[item['icon']]"></i>
              <div class="_wallet_jewel">
                <div class="_jewel"></div>
                <div class="_jewel"></div>
                <div class="_jewel"></div>
              </div>
            </div>
        </div>
          <span> {{item.name}}</span>
        </div>
    </div>

  <div class="side-form d-flex flex-column flex-shrink-0 p-3 bg-light vh-100" style="width: 280px;">
    <form action="" @submit.prevent="clickForm({type: typeValue, name:nameValue,rarety: raretyValue, value: parseInt(valueValue),icon:iconValue})">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Type</label>
          <select v-model="typeValue"  name="type" class="form-select" id="typeItem">
            <option value="armor" aria-selected="" >armor</option>
            <option value="weapon">weapon</option>
            <option value="helmet">helmet</option>
            <option value="shield">shield</option>
            <option value="magic">magic</option>
          </select>
     </div>
     <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" v-model="nameValue" class="form-control" id="exampleInputName" >
        <div id="name" class="form-text">Nom de l'item</div>
     </div>
      <div class="mb-3">
        <label for="exampleInputEmail1"  class="form-label">Rarety</label>
          <select name="type" v-model="raretyValue" class="form-select" id="typeItem">
            <option value="common" selected>common</option>
            <option value="rare">rare</option>
            <option value="epic">epic</option>
            <option value="legendary">legendary</option>
          </select>
     </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">value</label>
        <input type="text" class="form-control" v-model="valueValue" id="exampleInputValue" >
        <div id="value" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">icon</label>
        <input type="text" v-model="iconValue" class="form-control" id="exampleInputIcon" >
        <div id="icon" class="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div>
       <button class="btn btn-primary"  type="submit">Créé le nouvelle objet</button>
     </div>
    </form>
  </div>

  </div>
</template>




<script lang="ts">
import { SimpleDI } from 'typescript-simple-di';
import { ref } from '@vue/reactivity';
import { Item } from '@firebase/analytics';


export default {
  setup(){
    const typeValue = ref()
    const nameValue = ref()
    const raretyValue = ref()
    const valueValue = ref()
    const iconValue = ref()

    const items = ref([])
     async function fetchitems(){
        items.value  = await SimpleDI.get("GetItems").execute()
      }
    fetchitems()

   async function clickForm(value : Item){
      await SimpleDI.get("CreateItemsUC").execute(value)
      fetchitems()
    }
   return {items,typeValue,nameValue,raretyValue,valueValue,iconValue, clickForm}
  }

}
</script>

<style lang="scss" scoped>

</style>