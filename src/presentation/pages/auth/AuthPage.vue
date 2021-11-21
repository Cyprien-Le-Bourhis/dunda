<template>
  <img class="mx-auto w-25" src="/assets/images/CORN.png">
  <h1>WWWelcorn <i class="fal fa-unicorn"></i></h1>
  <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
  <form @submit.prevent="logIn">
    <div class="form-group first mb-2">
      <label for="email">Email</label>
      <input type="text" class="form-control" placeholder="your-email@gmail.com" id="email" v-model="email">
    </div>
    <div class="form-group last mb-3">
      <label for="password">Mot de passe</label>
      <input type="password" class="form-control" placeholder="Your Password" id="password" v-model="password">
    </div>
    <div class="d-flex mb-5 align-items-center">
    <!--
      <label class="control control--checkbox mb-0"><span class="caption">Se souvenir de moi</span>
        <input type="checkbox" checked="">
        <div class="control__indicator"></div>
      </label>
      -->
      <span class="ml-auto"><a href="#" class="forgot-pass">Mot de passe oublié</a></span>
    </div>
    <input type="submit" value="Log In" class="btn btn-block btn-primary">
  </form>



</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { SimpleDI } from "typescript-simple-di";
import LogInUC from "../../../domain/useCases/auth/logInUC";

@Options({
  components: {},
})

export default class AuthPage extends Vue {
  logInUC?: LogInUC;
  email = "";
  password = "";
  override created(): void {
    this.logInUC = SimpleDI.get("LogInUC");
  }

  async logIn(): Promise<void> {
    try {
      await this.logInUC?.execute(this.email, this.password);
      this.$router.push("/");
    } catch (e) {
      alert("error login");
    }
  }
}
</script>
