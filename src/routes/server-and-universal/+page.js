export const load = async ({ data }) => {
    console.log('Hello from universal load function, server data is:', data);
	return {
        ...data,
		clientNumber: 42,
	};
};