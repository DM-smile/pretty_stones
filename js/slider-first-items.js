"use strict"

const swiperFirstWrapper = document.querySelector('.popular-first__content')

function createItem(wrapper, itemList) {
   const item = document.createElement('div')
   item.classList.add('popular-first__item', 'item-popular-first', 'swiper-slide')
   const photo = document.createElement('div')
   photo.classList.add('item-popular-first__photo')
   const img = document.createElement('img')
   img.setAttribute('src', itemList.img)
   img.setAttribute('alt', 'image')
   const label = document.createElement('div')
   label.classList.add('popular-first__label')
   label.innerText = itemList.label
   const price = document.createElement('div')
   price.classList.add('popular-first__price')
   price.innerText = itemList.price
   photo.append(img)
   item.append(photo, label, price)
   wrapper.append(item)
}


const itemsFirstList = [
   {
      img: 'img/photo/photo-2.1.webp',
      label: 'Embossed hoop earrings',
      price: '$144.00',
   },
   {
      img: 'img/photo/photo-2.2.webp',
      label: 'Embossed hoop earrings',
      price: '$144.00',
   },
   {
      img: 'img/photo/photo-2.3.webp',
      label: 'Embossed hoop earrings',
      price: '$144.00',
   },
   {
      img: 'img/photo/photo-2.4.webp',
      label: 'Embossed hoop earrings',
      price: '$144.00',
   },
   {
      img: 'img/photo/photo-2.5.webp',
      label: 'Embossed hoop earrings',
      price: '$144.00',
   },
]

itemsFirstList.forEach((item) => createItem(swiperFirstWrapper, item))