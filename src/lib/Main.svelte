<script>
	import Img from '../assets/svelte_logo_resized.png';
</script>

<div class="main-container">
	<img src={Img} alt="the svuture of data tables" />
	<div class="main-text">the <i>sv</i>uture of datatables is here.</div>
</div>

<style>
	img {
		width: 60%;
	}

	.main-container {
		display: flex;
    flex-direction: column;
		text-align: center;
		align-items: center;
	}

	.main-text {
    padding-top: 1em;
		font-family: 'IBM Plex Sans', sans-serif;
		color: white;
		font-size: 1.5rem;
	}
</style>
