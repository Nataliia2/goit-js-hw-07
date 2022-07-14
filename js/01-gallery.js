import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');

function createdMarkupGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
};
console.log(galleryItems);

listGallery.insertAdjacentHTML('beforeend', createdMarkupGallery(galleryItems));

listGallery.addEventListener('click', onImgGalleryClick);

function onImgGalleryClick(evt) {
    evt.preventDefault();
    const imgElSelected = evt.target.classList.contains('gallery__image');
    if (!imgElSelected) {
        return
    }
   
    const url = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${url}">`);
instance.show(() => window.addEventListener('keydown', onKeyPress));

    function onKeyPress(evt) {
    if (evt.key === 'Escape') {
        instance.close(() => window.removeEventListener('keydown', onKeyPress));
        console.log(evt.key);
        return;
    }
    return;
};
}