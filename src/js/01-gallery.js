import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryPhotos = galleryItems.map(item => {
  return `<div class="gallery__photo">
  <a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
  </a>
  </div>`;
}).join("");

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryPhotos;
const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});