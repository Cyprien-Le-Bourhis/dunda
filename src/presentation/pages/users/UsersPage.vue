<template>
  <div>
    <h2>Users</h2>
    <UserList />
  </div>
</template>

<script lang="ts">
import UserList from "@/presentation/components/users/UserList.vue";
import { Vue, Options } from "vue-class-component";

@Options({
  components: {
    UserList,
  },
})
export default class UsersPage extends Vue {}
</script>