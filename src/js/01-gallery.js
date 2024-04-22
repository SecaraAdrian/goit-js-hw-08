import SimpleLightbox from 'simplelightbox';
import '/node_modules/simplelightbox/dist/simple-lightbox.css';
import { galleryItems } from './gallery-items';

const galleryMarkUp = document.querySelector('.gallery');

console.log(galleryItems);

const galleryEl = galleryItems
  .map(({ preview, description, original }) => 
    `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`)
  .join('');

galleryMarkUp.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery a' , {
    captionsData: 'alt' ,
    captionDelay: 250 ,
});

