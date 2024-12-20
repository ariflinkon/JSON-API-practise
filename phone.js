// Function to fetch phone data
const fetchPhoneData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data; // Return the phone data
    } catch (error) {
        console.error("Error fetching phone data:", error);
        throw error; // Re-throw the error for further handling
    }
};

// Method to display phone data
const displayPhones = phones => {
    phones.forEach(phone => {
        console.log(phone.phone_name);
    });
};

// Unified function to fetch and display phones
const fetchAndDisplayPhones = async (url) => {
    try {
        const phones = await fetchPhoneData(url);
        displayPhones(phones);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error handling in async function:", error);
    }
};

// URL for fetching phone data
const phoneDataUrl = 'https://openai.programminghero.com/api/phones?search=iphone';

// Call the unified function
fetchAndDisplayPhones(phoneDataUrl);