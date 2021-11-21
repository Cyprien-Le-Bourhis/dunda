<template>
  <div>
    <div v-if="componentVM.isLoading">Loading</div>
    <div v-else>
      <div v-for="(line, key) in componentVM.lines" :key="key">{{ line }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Connection from "@/domain/entities/Connection";
import GetAllConnections from "@/domain/useCases/connections/getAllConnectionsUC";
import { SimpleDI } from "typescript-simple-di";
import { Vue } from "vue-class-component";

export default class ConnectionList extends Vue {
  componentVM: ComponentVM = new ComponentVM(true);
  override created(): void {
    this.init();
  }
  async init(): Promise<void> {
    const getAllConnections =
      SimpleDI.get<GetAllConnections>("GetAllConnections");
    const connections: Connection[] = await getAllConnections.execute();
    this.componentVM = new ComponentVM(
      false,
      connections.map((connection) => connection.user.login)
    );
  }
}

class ComponentVM {
  isLoading: boolean;
  lines?: string[];
  constructor(isLoading: boolean, lines?: string[]) {
    this.isLoading = isLoading;
    this.lines = lines;
  }
}
</script>

<style lang="scss" scoped>
</style>