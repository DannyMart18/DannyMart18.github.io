let currentImageIndex = 0;
let images = [];

async function generateGallery() {
    const response = await fetch("images/images.json");
    const data = await response.json();
    images = data.images;
    const carouselInner = document.querySelector('.carousel-inner');

    images.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

        const img = document.createElement('img');
        img.className = "d-block w-100";
        img.src = `images/${image}`;
        img.alt = `Gallery Image ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
}

function updateImage(gallerySlide) {
    gallerySlide.src = `images/${images[currentImageIndex]}`;
    gallerySlide.alt = `Gallery Image ${currentImageIndex + 1}`;
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



