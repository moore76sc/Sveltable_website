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
  
  const getDataSet = async () => {
  const res = await fetch ("/api");//fetches the exported data from index.js. We are not sending a request body
  const data = await res.json();//parses with json and assigns to data
  if (res.ok){//if the response body is populated it will return it as props
    return {
    props: data
    }
  } else {
    throw new Error(data);
    }
    }
  let promise = getDataSet();
</script>

<div class="AppContainer">
  <div class="HeaderContainer">
    <Header />
  </div>
  <div class="MainContainer">
    <Main />
  </div>
  <div class="DemoContainer"><!-- using await, the demo component won't render until the getDataSet function completes. We passing the response props into Demo -->
    {#await promise then output}
      <Demo dataSet={output.props}/>
    {/await}
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
