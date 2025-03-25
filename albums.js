// Function to fetch data from a given URL
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

// Method to fetch and display phone data
const loadPhone = async () => {
    const data = await fetchData('https://openai.programminghero.com/api/phones?search=iphone');
    if (data && data.results) {
        displayPhones(data.results);
    } else {
        console.log("No phone data available.");
    }
};

// Method to display phone data
const displayPhones = phones => {
    if (phones.length === 0) {
        console.log("No phones found.");
    } else {
        phones.forEach(phone => {
            console.log(phone.name);
        });
    }
};

// Method to fetch and display albums
const fetchAlbums = async () => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/albums');
    if (data && data.length > 0) {
        displayAlbums(data);
    } else {
        console.log("No albums available.");
    }
};

// Method to display albums
const displayAlbums = albums => {
    albums.forEach(album => {
        console.log(`Album ID: ${album.id}, Title: ${album.title}`);
    });
};

// Call the methods
loadPhone();
fetchAlbums();