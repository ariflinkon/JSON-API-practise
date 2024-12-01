// New method to fetch and display phone data using callbacks
const loadPhoneWithCallback = (callback) => {
    fetch('https://openai.programminghero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => {
            const phones = data.results;
            callback(null, phones);
        })
        .catch(error => callback(error, null));
};

// Method to display phone data
const displayPhones = phones => {
    phones.forEach(phone => {
        console.log(phone.name);
    });
};

// Call the loadPhoneWithCallback method
loadPhoneWithCallback((error, phones) => {
    if (error) {
        console.error("Error fetching phone data:", error);
    } else {
        displayPhones(phones);
    }
});