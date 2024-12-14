// New method to fetch phone data using async/await
const loadPhoneWithAsync = async () => {
    try {
        const response = await fetch('https://openai.programminghero.com/api/phones?search=iphone');
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

// Call the loadPhoneWithAsync method
const fetchAndDisplayPhones = async () => {
    try {
        const phones = await loadPhoneWithAsync();
        displayPhones(phones);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error handling in async function:", error);
    }
};

fetchAndDisplayPhones();