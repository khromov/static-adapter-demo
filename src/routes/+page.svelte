<h1>Blog posts</h1>

{#each posts as post}
    <h2>{post.title}</h2>
    <a href="/posts/{post.id}">Read more</a>
{/each}