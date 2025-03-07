window.addEventListener('load', changeLanguage('eng'));

let currentSlide = 0;
const slides = document.getElementsByClassName("skills");
const slides_size = slides.length; 
console.log(slides_size)
function changeSlide(number){
    console.log(number);
    for(let i = 0; i<slides_size; i++){
        if(i === number){
            slides[i].style.display = "flex";
            console.log("checkkk")
        }else{
            slides[i].style.display = "none";
            console.log("nothing");
        }
    }
}

changeSlide(currentSlide);

let leftArrow = document.getElementsByClassName("left_arrow")[0];
let rightArrow = document.getElementsByClassName("right_arrow")[0];

leftArrow.addEventListener("click", changeLeft);
rightArrow.addEventListener("click", changeRight);

function changeLeft(){

    if(currentSlide === 0){
        currentSlide = slides_size - 1;   
    }else{
        currentSlide--;
    }
    changeSlide(currentSlide);
    console.log(currentSlide);
}

function changeRight(){

    if(currentSlide === slides_size - 1){
        currentSlide = 0;   
    }else{
        currentSlide++;
    }
    console.log(currentSlide);
    changeSlide(currentSlide);
}

start = document.getElementsByClassName("start")[0];
eng = document.getElementsByClassName("english")[0];
pl = document.getElementsByClassName("polish")[0];

//kor = document.getElementsByClassName("korean")[0]
function changeLanguage(lang){
    counter = 0;
    content = document.querySelectorAll('[lang]');
    console.log(content);
    for(let i = 0 ; i< content.length; i++){

        console.log(content[i].getAttribute('lang'));

        if(content[i].getAttribute('lang') === lang ){

            content[i].style.display = 'flex';
            counter++;
        }else{

            content[i].style.display = 'none';
            counter++;
        }
    }
 
}


eng.addEventListener('click', function () {
    console.log(start.innerText);
    start.textContent = 'EN';
    console.log(start.innerText);
    changeLanguage('eng')
})

pl.addEventListener('click', function () {
    console.log(start.innerText);
    start.textContent = 'PL';
    console.log(start.innerText);
    changeLanguage('pl')
})




