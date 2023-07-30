/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const id = params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    return {
        post
    };
}

export const prerender = true;