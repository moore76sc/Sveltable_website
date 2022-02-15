
<script>
import SvelTable from 'sveltables'
export let dataSet;
</script>

<div class="header">
	<h2>demo</h2>
</div>

<div class="DemoContainer">
	
	<SvelTable dataSet={dataSet} />
</div>

<style>
	.DemoContainer {
		padding-top: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header{
    color: #fff;
    font-family: 'IBM Plex Sans', sans-serif;
    display: flex;
    justify-content: center;
  }
</style>
