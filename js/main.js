// Элементы на страницы
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children); // превращаем в массив html коллекцию
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index){
    if (index !== 0) {
        slide.classList.add('hidden');
    }

    // Добавляем индексы (атрибуты для слайдов)
    slide.dataset.index = index;

    // Добавляем data атрибуиты active для первого/активного слайда
    sliderItems[0].setAttribute('data-active', '');

    // Клик по слайдам
    slide.addEventListener('click', function () {

        // Скрываем текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');
        
        // Рассчитываем индекс следующего слайда

        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;


        // if (index + 1 === sliderItems.length) {
        //     nextSlideIndex = 0;
        // } else {
        //     nextSlideIndex = index + 1;
        // }
       // const nextSlideIndex = parseInt(slide.dataset.index) + 1;

        // Находим элемент со следующим слайдом
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // Отображаем следующий слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    });
});

btnNext.onclick = function () {
    // const currentSlide = slider.querySelector('[data-active]');
    // const currentSlideIndex = +currentSlide.dataset.index;
    // currentSlide.classList.add('hidden');
    // currentSlide.removeAttribute('data-active');

    // // Показываем следующий слайд
    // const nextSlideIndex = currentSlideIndex + 1 === sliderItems.lenght ? 0 : currentSlideIndex + 1;
    // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    // nextSlide.classList.remove('hidden');
    // nextSlide.setAttribute('data-active', '');

    showNextSlide('next');
};

btnPrev.onclick = function () {
    // const currentSlide = slider.querySelector('[data-active]');
    // const currentSlideIndex = +currentSlide.dataset.index;
    // currentSlide.classList.add('hidden');
    // currentSlide.removeAttribute('data-active');

    // // Показываем следующий слайд
    // const nextSlideIndex = currentSlideIndex  ===  0 ? sliderItems.length - 1 : currentSlideIndex - 1;

    // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    // nextSlide.classList.remove('hidden');
    // nextSlide.setAttribute('data-active', '');

    showNextSlide('prev');
};


function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = parseInt(currentSlide.dataset.index);
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	// Рассчитываем след индекс в зависимости от направления движения
	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}

    // Показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

