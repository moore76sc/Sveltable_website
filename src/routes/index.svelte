<script lang="ts">
  /* 
    index.svelte is where we are rendering our site. 
    Header.svelte is the header/navigation component.
    Main.svelte is our landing page with our sveltable logo and description.
    Features.svelte is our text description of features within Sveltable.
    Demo.svelte is a component containing a gif of creating a table component and a description of it.
  */ 

  import Header from '../lib/Header.svelte';
  import Main from '../lib/Main.svelte';
  import Features from '../lib/Features.svelte';
  import Demo from '../lib/Demo.svelte';
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
  <div class="FeatureContainer">
    <Features />
  </div>
</div>

<style>
  .AppContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .MainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .DemoContainer {
    min-height: 100vh;
  }

  .FeatureContainer {
    min-height: 100vh;
  }
</style>
