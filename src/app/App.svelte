<script>
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";

  let y;
</script>

<svelte:window bind:scrollY={y} />

<main>
  <Header />
  <div>{y}</div>
  <Main {y} />
  <div class="temp" />
</main>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .temp {
    background-color: #002940;
    height: 700px;
  }
</style>
