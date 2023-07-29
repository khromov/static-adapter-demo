<script>
	export let data;
    $: console.log(data);
</script>

<h1>
	A totally (not) random number: {data.random}
</h1>
