<script>
  import Img from '../assets/svelte_logo_resized.png';
  let y = 0;
  $: theme = y > 0 ? 'light' : 'dark';
</script>

<svelte:window bind:scrollY={y} />

<div class={`header ${y > 0 ? 'header-light' : 'header-dark'}`}>
  <div class={`menu-left ml-${theme}`}>
    <div class="head-btn">demo</div>
    <div class="head-btn">features</div>
    <div class="head-btn">team</div>
  </div>
  <div class="menu-logo">
    <img id="logo-img" src={Img} alt="svelte table logo" />
  </div>
  <div class="menu-social">

    <a class={`git-${theme}`} href="https://github.com/oslabs-beta/SvelTable" target="_blank">
      <div class={`git git-${theme}`}> <i class="fab fa-github fa-2x" /></div></a>
    <div class={`linked fa-linkedin-${theme}`}>
      <i class={`fab fa-linkedin  fa-2x`} />
    </div>
    <a class={`npm-${theme}`} href="https://www.npmjs.com/" target="_blank"> 
    <div class={`npm npm-${theme}`}><i class="fab fa-npm fa-2x" /></div>
  </a>
  </div>
  
</div>


<style>
 * {
    margin: 0;
    padding: 0;
  }
a{
  text-decoration: none; 
 
}

a:visited{
  color: #fff;
}
  .header {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    /* padding-left: 10em;
    padding-right: 10em; */
    width: 100%;
    position: fixed;
   
  }

  .header-dark {
    background-color: #002940;
    color: #fff;
    transition: all 0.5s;
  }

  .header-light {
    background-color: #e6e6e6;
    color: #002940;
    transition: all 0.5s;
  }

  .menu-left,
  .menu-social {
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .ml-light {
    color: #002940;
  }
  .git-light {
    color: #333;
  }

   .npm{
     margin-right: 1rem;
     margin-left: .5rem;
     font-size: 1.1em;
   }
  .npm-light {
    color: #cc3534;
  }

  .npm-dark{
    color: #fff;
  }

  .git, .linked{
    margin: 0 .5rem;
    font-size: .8em;
  }

 

  /* .fa-linkedin-dark {
  } */

  .fa-linkedin-light {
    color: #0072b1;
  }

  .head-btn:hover,
  .menu-logo:hover,
  .item:hover {
    cursor: pointer;
  }

  .head-btn {
    /* color: white; */
    margin-left: 1rem;
  }

  .menu-logo {
    color: white;
  }

  #logo-img {
    height: 30px;
    width: 50px;
    border-radius: 5px;
  }

  .fa-stack-overflow {
    padding-left: 2rem;
  }


 
</style>
