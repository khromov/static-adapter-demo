/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const first10posts = posts.slice(0, 10);
    return {
        posts: first10posts,
    };
}

export const prerender = true;