<template>
  <div>

    <input type="submit" value="Log In" class="btn btn-block btn-primary">
    <input type="submit" value="Log In" class="btn btn-block btn-outline-primary">

    <span class="badge bg-primary">wesh 2.0</span>
    <span class="badge bg-primary-light">wesh 2.0</span>
    <span class="badge bg-primary-lighter">wesh 2.0</span>

    <a href="#" class="link-primary">Primary link</a>
    <a href="#" class="link-secondary">Secondary link</a>
    <a href="#" class="link-success">Success link</a>
    <a href="#" class="link-danger">Danger link</a>
    <a href="#" class="link-warning">Warning link</a>
    <a href="#" class="link-info">Info link</a>
    <a href="#" class="link-light">Light link</a>
    <a href="#" class="link-dark">Dark link</a>

    <div class="alert alert-primary" role="alert">
      A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-secondary" role="alert">
      A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-success" role="alert">
      A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-danger" role="alert">
      A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-warning" role="alert">
      A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-info" role="alert">
      A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-light" role="alert">
      A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-dark" role="alert">
      A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Class</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        
          <tr class="table-primary">
            <th scope="row">Primary</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-secondary">
            <th scope="row">Secondary</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Success</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">Danger</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-warning">
            <th scope="row">Warning</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-info">
            <th scope="row">Info</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-light">
            <th scope="row">Light</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-dark">
            <th scope="row">Dark</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { Vue, Options } from "vue-class-component";

  @Options({
    components: {}
  })
  export default class ThemePage extends Vue {
    
  }
</script>

<style lang="scss" scoped>
  .bloc {
    width: 200px;
    height: 200px;
    padding: 20px;
    background-color: #222;
  }

  .bloc-primary {
    // use themecolor var and red by default
    background-color: var(--themecolor-primary, red);
  }
</style>