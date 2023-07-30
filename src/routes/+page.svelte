<script>
    export let data;
    $: console.log(data);
</script>

<h2>Menu</h2>

<a href="/dynamic">Dynamic route (prerender = false)</a> <br/>
<a href="/prerendered">Prerendered route (prerender = true)</a> <br/>
<a href="/randomNumber.json">randomNumber JSON route (prerender = true)</a> <br/>
<a href="/server-and-universal">Server and universal route (prerender = true)</a> <br/>
<a href="/server-load">Server load route (prerender = true)</a> <br/>
<a href="/ssr">SSR route (prerender = true)</a> <br/>

<h1>Blog posts</h1>

{#each data.posts as post}
    <h2>{post.title}</h2>
    <a href="/posts/{post.id}">Read more</a>
{/each}