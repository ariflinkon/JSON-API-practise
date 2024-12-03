// New method to fetch phone data using Promises
const loadPhoneWithPromise = () => {
    return fetch('https://openai.programminghero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => data.data) // Return the phone data
        .catch(error => {
            console.error("Error fetching phone data:", error);
            throw error; // Re-throw the error for further handling
        });
};

// Method to display phone data
const displayPhones = phones => {
    phones.forEach(phone => {
        console.log(phone.phone_name);
    });
};

// Call the loadPhoneWithPromise method
loadPhoneWithPromise()
    .then(phones => displayPhones(phones))
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error("Error handling in promise chain:", error);
    });