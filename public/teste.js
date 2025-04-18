
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item-custom');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const totalItems = items.length;
const itemsPerView = 6;
prevBtn.style.display = 'none';
console.log(totalItems);


function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    if((currentIndex + itemsPerView) === totalItems){
        nextBtn.style.display = 'none';
    }else{
        nextBtn.style.display = 'block';
    }
    if(currentIndex === 0){
        prevBtn.style.display = 'none';
    }else{
        prevBtn.style.display = 'block';
    }
    console.log(currentIndex);
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerView) {
        if((currentIndex + ((itemsPerView*2) - 1)) <= totalItems){
            currentIndex+=itemsPerView;
        }else{
            currentIndex = totalItems - (itemsPerView);
        }
        
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        if((currentIndex - itemsPerView) >= 0){
            currentIndex-=itemsPerView;
        }else{
            currentIndex = 0;
        }
        updateCarousel();
    }
  });