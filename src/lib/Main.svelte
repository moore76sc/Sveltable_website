<script>
  import Img from '../assets/svelte_logo_resized.png';
</script>

<div class="main-logo">
  <img src={Img} alt="the svuture of data tables" />
  <div class="main-text">the <i>sv</i>uture of datatables is here.</div>
</div>

<style>
  * {
    background-color: #002940;
  }

  img {
    width: 30%;
    margin: auto;
    display: block;
  }

  .main-logo {
    margin-top: 10rem;
    justify-content: center;
    text-align: center;
    /* align-items: center; */
    /* align-self: center; */
  }

  .main-text {
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    font-size: 46px;
  }
</style>
