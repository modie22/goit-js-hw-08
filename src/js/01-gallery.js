import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryImgItems = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>
    `;
};
const elements = galleryItems.map(galleryImgItems).join("");
galleryEl.insertAdjacentHTML("afterbegin", elements);

const gallery = new SimpleLightbox("ul.gallery a",
{
  captionsData: "alt",
  captionDelay: 250,
});