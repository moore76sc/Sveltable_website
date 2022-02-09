<script lang="ts">
  import Header from './lib/Header.svelte';
  import Main from './lib/Main.svelte';
  import Features from './lib/Features.svelte';
  import Demo from './lib/demo.svelte';
  // let y;
</script>

<div class="AppContainer">
  <div class="HeaderContainer">
    <Header />
  </div>
  <div class="MainContainer">
    <Main />
  </div>
  <div class="DemoContainer">
    <Demo />
  </div>
  <!-- <div class="FeatureContainer">
    <Features />
  </div> -->
</div>

<style>
  .AppContainer {
    display: flex;
    flex-direction: column;
  }
  .MainContainer {
    background-color: #002940;
    height: 100vh;
  }
  .DemoContainer {
    background-color: #002940;
    height: 100vh;
  }
  .FeatureContainer {
    background-color: #002940;
    height: 100vh;
  }
</style>
