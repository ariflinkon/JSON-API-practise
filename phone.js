// New method to fetch and display phone data
const loadPhone = async () => { 
    try {
        const res = await fetch('https://openai.programminghero.com/api/phones?search=iphone');
        const data = await res.json();
        const phones = data.results;
        displayPhones(phones);
    } catch (error) {
        console.error("Error fetching phone data:", error);
    }
};

// Method to display phone data
const displayPhones = phones => {
    phones.forEach(phone => {
        console.log(phone.name);
    });
};

// Call the loadPhone method
loadPhone();
