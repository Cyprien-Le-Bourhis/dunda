<template>
  <div id="menu">
    <router-link class="text-white text-decoration-none" to="/"> Home</router-link>
    <router-link class="text-white text-decoration-none" to="/craftery"> <i class="fas fa-gavel"></i> Craftery</router-link>
    <button class="btn btn-primary" @click="onLogOutClick">Log Out</button>
  </div>
</template>

<script lang="ts">
import { SimpleDI } from "typescript-simple-di";
import { Vue } from "vue-class-component";
import LogOutUC from "../../../domain/useCases/auth/logOutUC";

export default class SideNav extends Vue {
  logOutUC?: LogOutUC;

  override created(): void {
    this.logOutUC = SimpleDI.get("LogOutUC");
  }

  onLogOutClick(): void {
    this.logOutUC?.execute();
    this.$router.push("/login");
  }
}
</script>
<style lang="scss">
#menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 0.5rem;
  background: rgba(white, 0.2);
}
</style>