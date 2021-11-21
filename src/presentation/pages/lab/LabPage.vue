<template>
  <div class="w-100">
      <TableDefault  />
      <TableGrid  />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TableDefault from "@/presentation/components/table/TableDefault.vue";
import TableGrid from "@/presentation/components/table/TableGrid.vue";
@Options({
  components: {
    TableDefault,
    TableGrid
  },
})
export default class LabPage extends Vue {
  
}
</script>