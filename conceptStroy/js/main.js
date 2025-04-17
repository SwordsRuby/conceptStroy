
//go to top of page
location.href = '#banner';

//find slider block in HTML
const reviewSlider = document.querySelector('.reviews_slider_subblock');

//find all slides in HTML
const slides = document.querySelectorAll('.review');

//width one slide with 40px gap
slideWidth = 373;

//translateX for slider block
sliderTranslateX = 0;

//slides index for visible zone
leftSlide = 0;
centerSlide = 1;
rightSlide = 2;

// review slider function for back button
function backButton() {
    if (leftSlide != 0) {
        leftSlide--;
        centerSlide--;
        rightSlide--;
        sliderTranslateX += slideWidth;
        slideAnim(leftSlide, centerSlide, rightSlide);
    }
}

// review slider function for next button
function nextButton() {
    if (rightSlide != (slides.length - 1)) {
        leftSlide++;
        centerSlide++;
        rightSlide++;
        sliderTranslateX -= slideWidth;
        slideAnim(leftSlide, centerSlide, rightSlide);
    }
}

// review slider function for animation slide
function slideAnim(leftSlideIndex, centerSlideIndex, rightSlideIndex) {
    for (let index = 0; index < slides.length; index++) {
        if (index == leftSlideIndex || index == centerSlideIndex || index == rightSlideIndex) {
            setTimeout(() => {
                slides[index].style.opacity = "1";
            }, 200);
        }
        else {
            slides[index].style.opacity = "0";
        }

        if (index == centerSlideIndex) {
            slides[index].style.transform = "scale(105%)";
        }
        else {
            slides[index].style.transform = "scale(100%)";
        }
    }

    reviewSlider.style.transform = "translateX(" + sliderTranslateX + "px )";
}

//call function for scale center slide
slideAnim(leftSlide, centerSlide, rightSlide);

// function to show and hide answers
function answerVisible(element) {
    const cardArray = element.parentNode.children;

    for (let index = 1; index < cardArray.length; index++) {
        cardArray[index].classList.remove('answer_visible');
    }

    element.classList.add('answer_visible');
}
