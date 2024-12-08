const fetchPhotos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayPhotos(data);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
};

const displayPhotos = (data) => {
    const photosContainer = document.getElementById('photos');
    data.slice(0, 5000).forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = 'p-4 bg-gray-100 rounded shadow';
        photoItem.innerHTML = `
            <img src="${photo.thumbnailUrl}" alt="${photo.title}" class="w-full h-auto mb-2 rounded">
            <p class="text-sm">${photo.title}</p>
        `;
        photosContainer.appendChild(photoItem);
    });
};

fetchPhotos();