const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const fetchPhotos = async (url) => {
    try {
        const data = await fetchData(url);
        const filteredData = filterPhotosByAlbum(data, 1); // Filter photos by album ID 1
        const sortedData = sortPhotosByTitle(filteredData); // Sort photos by title
        displayPhotos(sortedData);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
};

const filterPhotosByAlbum = (data, albumId) => 
    data.filter(({ albumId: id }) => id === albumId);

const sortPhotosByTitle = (data) => 
    data.sort((a, b) => a.title.localeCompare(b.title));

const displayPhotos = (data) => {
    const photosContainer = document.getElementById('photos');
    data.slice(0, 5000).forEach(({ thumbnailUrl, title }) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'p-4 bg-gray-100 rounded shadow';
        photoItem.innerHTML = `
            <img src="${thumbnailUrl}" alt="${title}" class="w-full h-auto mb-2 rounded border border-gray-300">
            <p class="text-sm">${title}</p>
        `;
        photosContainer.appendChild(photoItem);
    });
};

// Call the function with a dynamic URL
fetchPhotos('https://jsonplaceholder.typicode.com/photos');