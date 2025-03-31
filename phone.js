// Function to fetch phone data
async function fetchPhoneData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data; // Return the phone data
    } catch (error) {
        handleError("Error fetching phone data:", error);
        throw error; // Re-throw the error for further handling
    }
}

// Function to display phone data
function displayPhoneNames(phones) {
    phones.forEach(phone => {
        console.log(phone.phone_name);
    });
}

// Function to handle errors
function handleError(message, error) {
    console.error(message, error);
}

// Unified function to fetch and display phones
async function fetchAndDisplayPhoneData(url) {
    try {
        const phones = await fetchPhoneData(url);
        displayPhoneNames(phones);
    } catch (error) {
        handleError("Error handling in async function:", error);
    }
}

// URL for fetching phone data
const phoneDataUrl = 'https://openai.programminghero.com/api/phones?search=iphone';

// Call the unified function
fetchAndDisplayPhoneData(phoneDataUrl);