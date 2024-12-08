"use strict"

const swiperSecondWrapper = document.querySelector('.popular-second__content')

function createItem(wrapper, itemList) {
   const item = document.createElement('div')
   item.classList.add('popular-second__item', 'item-popular-second', 'swiper-slide')
   const photo = document.createElement('div')
   photo.classList.add('item-popular-second__photo')
   const img = document.createElement('img')
   img.setAttribute('src', itemList.img)
   img.setAttribute('alt', 'image')
   const content = document.createElement('div')
   content.classList.add('item-popular-second__content')
   const h6 = document.createElement('H6')
   h6.classList.add('item-popular-second__title')
   h6.innerText = itemList.title
   const info = document.createElement('div')
   info.classList.add('item-popular-second__info')
   const itemData = document.createElement('div')
   itemData.classList.add('item-popular-second__data')
   const icon = document.createElement('img')
   icon.setAttribute('src', itemList.icon)
   icon.setAttribute('alt', itemList.iconName)
   const iconLabel = document.createElement('span')
   iconLabel.innerText = itemList.iconLabel
   const label = document.createElement('div')
   label.classList.add('item-popular-second__label')
   label.innerText = itemList.itemLabel
   const link = document.createElement('a')
   link.classList.add('item-popular-second__link')
   link.setAttribute('href', itemList.linkUrl)
   link.innerText = itemList.linkText
   photo.append(img)
   item.append(photo, content)
   content.append(h6, info, link)
   info.append(itemData, label)
   itemData.append(icon, iconLabel)
   wrapper.append(item)
}


const itemsSecondList = [
   {
      img: 'img/photo/photo-4.1.webp',
      title: 'Comment connaître sa taille de doigts ?',
      icon: 'img/icons/calendar.svg',
      iconName: 'calendar',
      iconLabel: 'Dec 2, 2020',
      itemLabel: '8 min read',
      linkUrl: '#',
      linkText: 'Read More',
   },
   {
      img: 'img/photo/photo-4.2.webp',
      title: 'Engagement Rings – a Buyer’s Guide',
      icon: 'img/icons/calendar.svg',
      iconName: 'calendar',
      iconLabel: 'Dec 2, 2020',
      itemLabel: '8 min read',
      linkUrl: '#',
      linkText: 'Read More',
   },
   {
      img: 'img/photo/photo-4.3.webp',
      title: 'Engagement Rings – a Buyer’s Guide',
      icon: 'img/icons/calendar.svg',
      iconName: 'calendar',
      iconLabel: 'Dec 2, 2020',
      itemLabel: '8 min read',
      linkUrl: '#',
      linkText: 'Read More',
   },
   {
      img: 'img/photo/photo-4.2.webp',
      title: 'Engagement Rings – a Buyer’s Guide',
      icon: 'img/icons/calendar.svg',
      iconName: 'calendar',
      iconLabel: 'Dec 2, 2020',
      itemLabel: '8 min read',
      linkUrl: '#',
      linkText: 'Read More',
   },
]

itemsSecondList.forEach((item) => createItem(swiperSecondWrapper, item))