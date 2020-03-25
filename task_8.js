import galleryItems from "./src/gallery-items.js";

//console.log(galleryItems)

const imgList = galleryItems.map(function(galleryItem, item) {
  //создаю теги
  item = document.createElement("li");
  const itemLink = document.createElement("a");
  const itemImg = document.createElement("img");

  item.append(itemLink);
  itemLink.append(itemImg);

  //добавляю классы
  item.classList.add("gallery__item");
  itemLink.classList.add("gallery__link");
  itemImg.classList.add("gallery__image");

  //добавляю атрибуты для a
  itemLink.setAttribute("href", galleryItem.original);
  //добавляю атрибуты для img
  itemImg.setAttribute("src", galleryItem.preview);
  itemImg.setAttribute("data-source", galleryItem.original);
  itemImg.setAttribute("alt", galleryItem.description);

  return item;
});
const jsGallery = document.querySelector(".js-gallery");
jsGallery.append(...imgList);

// Делегирование на галерее ul.js-gallery и получение url большого изображения
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxRef = document.querySelector(".lightbox");
jsGallery.addEventListener("click", onTagsClick);
function onTagsClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // Подмена значения атрибута src элемента img.lightbox__image.
  lightboxImage.setAttribute("src", event.target.getAttribute("data-source"));
  //Открытие модального окна по клику на элементе галереи.
  lightboxRef.classList.add("is-open");
}

//Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
const closeModal = document.querySelector(
  'button[data-action="close-lightbox"]'
);
closeModal.addEventListener("click", () => {
  lightboxRef.classList.remove("is-open");
  //Очистка значения атрибута src элемента img.lightbox__image
  lightboxImage.setAttribute("src", " ");
});
