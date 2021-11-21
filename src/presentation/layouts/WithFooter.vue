<template>

  <!-- navbar -->

  <!-- container -->
  <div class="container">
    <slot />
  </div>

  <!-- footer -->
  <footer>
    <nav> [ FOOTER ]</nav>
  </footer>

</template>

<style lang="scss" scoped>

footer {
  display: flex;
  width: 100%;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  background-color: #212121;

  nav {
    color: #FFF;
  }
}
</style>