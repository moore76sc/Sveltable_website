<script context='module'>
/* console.log('context fire')
  export const load = async ({ fetch }) => {
  console.log('load fire')
    const res = await fetch('./api');
    const data = await res.json();
    console.log(data)
    return {
      props:{
        data,
      },
    };
  }; */
</script>
 
<script>
const getDataSet = async () => {
  const res = await fetch ("/");
  const data = await res.text();
  if (res.ok){
    console.log(data)
    return data}
  else {
    throw new Error(data);
    }
    }
    let promise = getDataSet();

import SvelTable from 'sveltables'

</script>

<div class="DemoContainer">

  {#await promise then data}
	<SvelTable dataSet={data}/>
{/await}

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
