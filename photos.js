const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const fetchPhotos = async (url, albumId = 1) => {
    try {
        const data = await fetchData(url);
        const filteredData = filterPhotosByAlbum(data, albumId);
        const sortedData = sortPhotosByTitle(filteredData);
        displayPhotos(sortedData);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
};

const filterPhotosByAlbum = (data, albumId) => 
    data.filter(({ albumId: id }) => id === albumId);

const sortPhotosByTitle = (data) => 
    data.sort((a, b) => a.title.localeCompare(b.title));

const createPhotoElement = ({ thumbnailUrl, title }) => {
    const photoItem = document.createElement('div');
    photoItem.className = 'p-4 bg-gray-100 rounded shadow';
    photoItem.innerHTML = `
        <img src="${thumbnailUrl}" alt="${title}" class="w-full h-auto mb-2 rounded border border-gray-300">
        <p class="text-sm">${title}</p>
    `;
    return photoItem;
};

const displayPhotos = (data) => {
    const photosContainer = document.getElementById('photos');
    photosContainer.innerHTML = ''; // Clear existing photos
    data.slice(0, 5000).forEach(photo => {
        const photoItem = createPhotoElement(photo);
        photosContainer.appendChild(photoItem);
    });
};

// Call the function with a dynamic URL and optional album ID
fetchPhotos('https://jsonplaceholder.typicode.com/photos', 1);