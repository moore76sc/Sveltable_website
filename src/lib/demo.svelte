
<script>
import SvelTable from 'sveltables'
export let dataSet;
</script>

<div class="DemoContainer">
	<SvelTable dataSet={dataSet}/>
</div>

<style>
  .SveltableComponent {
    background-color: white;
  }
  .DemoContainer {
    /* height: 100vh; */
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
