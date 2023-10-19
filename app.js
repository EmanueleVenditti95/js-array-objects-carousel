// - creare un array con tutti gli oggetti
const images = [
    {
        image: './img/01.webp',
        title: "Marvel's Spiderman Miles Morales",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: './img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];


// creare un ciclo per stampare tutte le immagini nel DOM
for (let i = 0; i < images.length; i++) {
    const currentObject = images[i]

    const carouselElement = document.getElementById('carousel-container')
    carouselElement.innerHTML += `
     <div class="carousel">
        <img src="${currentObject.image}" class=carousel__image>
        <div class=carousel__title>${currentObject.title}</div>
        <div class=carousel__text>${currentObject.text}</div>
        <button id="button-up" class=" button button-left"><i class="fa-solid fa-chevron-left"></i></button>
        <button id="button-down" class=" button button-right"><i class="fa-solid fa-chevron-right"></i></button>
     <div>
     `
}