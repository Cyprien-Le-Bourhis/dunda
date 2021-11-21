<template>
  <div class="container">
    <div v-if="componentVM.isLoading" class="loader">LOADING</div>
    <input
      type="text"
      @input="(event) => onSearchChange(event.target.value)"
      v-model="searchFilter"
    />

    <div class="users-list">
      <div
        v-for="(user, key) in componentVM.users"
        @click="onClickGoToCurrentUser(user.id)"
        :key="key"
        class="user-item"
      >
        <div>
          {{ user.name }}
        </div>
        <div style="height: 20px"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "@/domain/entities/User";

import GetUsersUC from "@/domain/useCases/users/getUsersUC";
import { SimpleDI } from "typescript-simple-di";
import { Vue } from "vue-class-component";

export default class UserList extends Vue {
  componentVM: ComponentVM = new ComponentVM({ isLoading: true });
  getUsersUC!: GetUsersUC;
  searchFilter = "";
  lastKeyPressedDateTime: Date = new Date(Date.now());

  override created(): void {
    this.init();
  }
  async init(): Promise<void> {
    this.getUsersUC = SimpleDI.get<GetUsersUC>("GetUsersUC");
    const userList = await this.getUsersUC.execute({});
    this.componentVM = this.componentVM.copyWith({
      isLoading: false,
      users: this.fromUsersToUserVm(userList),
    });
  }

  onSearchChange(value: string): void {
    const dateNow = new Date(Date.now());
    this.lastKeyPressedDateTime = dateNow;
    this.searchFilter = value;
    setTimeout(() => {
      this.checkDelayBeforeFetchUsers(dateNow.toISOString());
    }, 700);
  }

  onClickGoToCurrentUser(id: number): void {
    this.$router.push({ path: `/users/${id}` });
  }

  checkDelayBeforeFetchUsers(lastKeyPressed: string): void {
    if (this.lastKeyPressedDateTime.toISOString() == lastKeyPressed) {
      this.fetchUsers();
    }
  }

  async fetchUsers(): Promise<void> {
    this.componentVM = this.componentVM.copyWith({ isLoading: true });
    const userList: User[] = await this.getUsersUC.execute({
      users_search: this.searchFilter,
    });
    const usersVM = this.fromUsersToUserVm(userList);

    this.componentVM = this.componentVM.copyWith({
      isLoading: false,
      users: usersVM,
    });
  }

  fromUsersToUserVm(userList: User[]): UserVM[] {
    return userList.map((user) => {
      return new UserVM(user.firstname, user.id);
    });
  }
}

class ComponentVM {
  isLoading: boolean;
  users: UserVM[];
  constructor(args: ComponentVmParams) {
    this.isLoading = args.isLoading ?? true;
    this.users = args.users ?? [];
  }

  copyWith(args: ComponentVmParams): ComponentVM {
    return new ComponentVM({
      isLoading: args.isLoading ?? this.isLoading,
      users: args.users ?? this.users,
    });
  }
}

interface ComponentVmParams {
  isLoading?: boolean;
  isSearching?: boolean;
  users?: UserVM[];
}

class UserVM {
  readonly name: string;
  readonly id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
}

.user-item {
  cursor: pointer;
  transition: all 0.35s ease-in;
  &:hover {
    transition: all 0.35s ease-in;
    transform: scale(1.01);
    background-color: rgba(0, 0, 0, 0.04);
  }
  margin: 20px 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

  &--properties {
    margin: 5px 0;
    padding: 5px 0;
    border-radius: 5px;
  }
}
.loader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 20;
  font-weight: bold;
  pointer-events: none;
}
</style>
