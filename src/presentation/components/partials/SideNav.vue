<template>
  <div id="menu">
    <router-link to="/connections"> connections</router-link>
    <router-link to="/users"> users</router-link>
    <router-link to="/theme"> theme</router-link>
    <button @click="onLogOutClick">Log Out</button>
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
<style>
#menu {
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: aquamarine;
}
</style>