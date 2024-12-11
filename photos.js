const fetchPhotos = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const filteredData = filterPhotosByAlbum(data, 1); // Filter photos by album ID 1
        displayPhotos(filteredData);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
};

const filterPhotosByAlbum = (data, albumId) => {
    return data.filter(photo => photo.albumId === albumId);
};

const displayPhotos = (data) => {
    const photosContainer = document.getElementById('photos');
    data.slice(0, 5000).forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = 'p-4 bg-gray-100 rounded shadow';
        photoItem.innerHTML = `
            <img src="${photo.thumbnailUrl}" alt="${photo.title}" class="w-full h-auto mb-2 rounded border border-gray-300">
            <p class="text-sm">${photo.title}</p>
        `;
        photosContainer.appendChild(photoItem);
    });
};

// Call the function with a dynamic URL
fetchPhotos('https://jsonplaceholder.typicode.com/photos');