const fetchPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayPhotos(data))
        .catch(error => console.error('Error fetching photos:', error));
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