<script>
  import Img from '../assets/svelte_logo_resized.png';
  let duration = '500ms';
  let offset = 5;
  let tolerance = 5;
  let headerClass = 'header-dark';
  let y = 0;
  let lastY = 0;

  function updateClass(y) {
    const dy = lastY - y;
    lastY = y;
    // determine show / hide class
    return deriveClass(y, dy);
  }

  function deriveClass(y, dy) {
    // stay dark if at the top of page
    if (y < offset) {
      return 'header-dark';
    }
    // don't change the state unless scroll delta
    // is above a threshold
    if (Math.abs(dy) <= tolerance) {
      return headerClass;
    }
    // if scrolling down, change to light header
    return 'header-light';
  }

  //setting transition timer
  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  $: theme = y > 0 ? 'light' : 'dark';
</script>

<svelte:window bind:scrollY={y} />
<!-- <div use:setTransitionDuration class={headerClass}> -->

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
    <h5 class={`item git-${theme}`}><i class="fab fa-github fa-2x" /></h5>
    <h5 class={`item fa-linkedin-${theme}`}>
      <i class={`fab fa-linkedin  fa-2x`} />
    </h5>
    <h3 class:npm-light={y}><i class="fab fa-npm fa-2x" /></h3>
  </div>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
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

  .npm-light {
    color: #cc3534;
  }

  .item {
    margin: 0 0.5rem;
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

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
