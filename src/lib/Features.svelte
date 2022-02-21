<!-- <script>
</script>
 -->
<div class="features">
  <h2>installation</h2>
</div>

 <!-- Step 1 -->
<div class="gif-cont ">

<div class="step text-left">
  <p> <b>step 1:</b> install sveltables with <a href="https://www.npmjs.com/" target="_blank"> npm </a> </p>
</div>
<div class="visual">
  <img class="gif" src="src/assets/DEMO NPM install.gif" alt="Demo of NPM install Terminal" /> 
</div>
</div> 

 <!-- Step 2 -->
<div class="gif-cont ">

<div class="visual">
  <img class="gif img2" src="src/assets/DEMO import SvelTables.gif" alt="Demo of importing Sveltable into your app.svelte file" /> 
</div>
<div class="step text-right">
  <p><b>step 2:</b> import sveltables to your svelte file</p>
</div>
</div>

 <!-- Step 3 -->

 <div class="gif-cont ">

  <div class="step text-left">
  <p><b>step 3:</b> add your data</p>
 
</div>


<div class="visual">
  <img class="gif" src="src/assets/DEMO data setup.gif" alt="Demo of NPM install Terminal" /> 
</div>
</div>

<!-- <div class="features">
  <h2>features</h2>
</div>

<div class="gif-cont ">

<div class="visual">
  <img class="gif img2" src="src/assets/DEMO Column Sort.gif" alt="Demo of importing Sveltable into your app.svelte file" /> 
</div>
<div class="step text-right">
  <h3>column sorting</h3>
</div>
</div> -->




<style>
  .features {
    color: #fff;
    font-family: 'IBM Plex Sans', sans-serif;
    display: flex;
    justify-content: center;
  }

  .gif-cont{
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .gif{
  
   width: 100%;
  }

 /* .img2{
   height: 80%;
 } */
  .step{
    color: #fff;
   
    font-family: 'IBM Plex Sans', sans-serif;
    display: flex;
    align-items: center;

  }

  .text-left{
    margin-right: 2rem; 
  }
  
  .text-right{
    margin-left: 2rem;
  }

  .visual{
   
    padding: 1rem;
    background: #d3d3d3;
    width: 50%; 
  }
  a:visited{
    color: #fff;
  }
</style>
