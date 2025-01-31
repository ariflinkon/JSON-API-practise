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
    }
};

// Method to display phone data
const displayPhones = phones => {
    phones.forEach(phone => {
        console.log(phone.name);
    });
};

// Method to fetch and display comments
const fetchComments = async () => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/albums');
    if (data) {
        console.log(data);
    }
};

// Call the methods
loadPhone();
fetchComments();