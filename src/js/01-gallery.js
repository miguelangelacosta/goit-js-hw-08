import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery');
function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');


  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute('data-source', item.original);

  link.appendChild(image);
  galleryItem.appendChild(link);
  return galleryItem;
}

function renderGallery() {
  const galleryItemsHTML = galleryItems.map(item => createGalleryItem(item));
  gallery.append(...galleryItemsHTML);
}
renderGallery();
let lightboxGallery = new SimpleLightbox('.gallery a',{
        captionsData:'alt',
           captionsData:250,
 })

