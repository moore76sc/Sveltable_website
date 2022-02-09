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
    width: 60%;
    margin: auto;
    display: block;
    /* position: absolute; */
    /* width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }

  .main-logo {
    /* height: 100vh; */
    /* display: flex; */
    margin-top: 8rem;
    justify-content: center;
    text-align: center;
  }

  .main-text {
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    font-size: 46px;
  }
</style>
