<script>
  let y;
</script>

<div class="header-dark">
  <div class="menu-left">
    <div class="head-btn">demo</div>
    <div class="head-btn">features</div>
    <div class="head-btn">team</div>
  </div>
  <div class="menu-logo">
    <img id="logo-img" src="/logo.png" alt="svelte table logo" />
  </div>
  <div class="menu-social">
    <h5 class="item"><i class="fab fa-github fa-2x" /></h5>
    <h5 class="item"><i class="fab fa-linkedin fa-2x" /></h5>
    <h3 class="item"><i class="fab fa-npm fa-2x" /></h3>
  </div>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .header-dark {
    height: 4.5rem;
    background-color: #002940;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    top: 0;
    left: 0;
    width: 98%;
    position: fixed;
  }

  .menu-left,
  .menu-social {
    display: flex;
    align-items: center;
  }

  .item {
    margin: 0 0.5rem;
    color: #fff;
  }

  .head-btn:hover,
  .menu-logo:hover,
  .item:hover {
    cursor: pointer;
  }

  .head-btn {
    color: white;
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
