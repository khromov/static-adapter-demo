import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    const randomNumber = Math.random();
    return json({
        randomNumber
    });
}

export const prerender = true;