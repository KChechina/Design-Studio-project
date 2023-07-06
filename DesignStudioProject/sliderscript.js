let slider = [{title: 'Rostov-on-Don, Admiral',
    image: 'slider_photo/image 2.1.jpg' ,
    city: `Sochi ThievesRostov-on-Don /n LCD admiral`,
    area: '81 m2',
    time: '3.5 months',
    },
    {title: 'Sochi Thieves',
    image: 'slider_photo/image 2-2.jpg' ,
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
}, 
    {title: 'Rostov-on-Don Patriotic',
    image: '/slider_photo/image 3-3.jpg' ,
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
}
]

let projectsLink = document.querySelector('.projects__link');
let cardPhoto = document.querySelector('.card__photo');
let rightArrow = document.querySelector('.slider__arrow_right');
let leftArrow = document.querySelector('.slider__arrow_left');
let sliderPoint = document.querySelector('.slider__point');

const setEntity = (index) => {
    cardPhoto.src = slider[index].image;
    projectsLink.text = slider[index].title;
}

rightArrow.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
    })