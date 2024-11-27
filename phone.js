const loadPhone = async () => { 
    const res = await fetch('https://openai.programminghero.com/api/phones?search-iphone');
    const data = await res.json();
    const phones = data.results;
    displayPhones(phones);
}

const displayPhones = phones => {
    phones.forEach(phone => {
        console.log(phone.name);
    });
}