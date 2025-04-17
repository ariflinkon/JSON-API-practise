const fetchJSON = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        return res.json();
    } catch (err) {
        console.error('Fetch error:', err);
        return null;
    }
};

const logPosts = {
    titles(posts) {
        posts?.forEach(({ title }) => console.log(`Title: ${title}`));
    },
    details(posts) {
        posts?.forEach(({ title, body }) => {
            console.log(`Title: ${title}`);
            console.log(`Body: ${body}`);
            console.log('---');
        });
    }
};

const displayPosts = async (url) => {
    const posts = await fetchJSON(url);
    if (posts) logPosts.details(posts);
};

// Example usage
const url = 'https://jsonplaceholder.typicode.com/posts';
displayPosts(url);

(async () => {
    const posts = await fetchJSON(url);
    logPosts.titles(posts);
})();
