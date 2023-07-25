import * as db from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {¨
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
        
    return {
        posts
    };
}