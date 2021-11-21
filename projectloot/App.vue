<template>
  <Place />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Place from "./components/Place.vue";

@Options({
  components: {
    Place,
  },
})
export default class App extends Vue {
  customColor = "#E6512E";
}
</script>

<style lang="scss" >
$primary: #75382a;
$secondary: #2ba393;
$bg: rgb(43, 41, 41);
@import "~@/../../node_modules/bootstrap/scss/bootstrap.scss";
@import url("https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap");
html,
body {
  height: 100%;
  background-color: $bg;
  font-family: "MedievalSharp", cursive !important;
}
h2 {
  font-size: 3rem;
  sup {
    font-size: 1rem;
  }
  font-family: "MedievalSharp", cursive !important;
}
#app {
  height: 100%;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
