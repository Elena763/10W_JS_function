/*Task 1*/
//Function Declaration
function say() {
    console.log('Я учу JavaScript!');
}
say();
//Function Expression
let say2 = function() {
    console.log('Я учу JavaScript!!')
};
say2();
//Arrow Function
let say3 = () => console.log('Я учу JavaScript!!!');
say3();
/*Task 2*/
let offset = 0;
const sliderLine = document.querySelector('.slider__line')

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 167;
    if (offset > 501){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider-back').addEventListener('click', function(){
    offset = offset - 167;
    if (offset < 0){
        offset = 501;
    }
    sliderLine.style.left = -offset + 'px';
});
/*Task 3*/
const year = document.querySelector('.year').value;
const button = document.querySelector('.button');
const result = document.querySelector('.result');
button.addEventListener('click', () => {
    const year = document.querySelector('.year').value;
    if (Number(year) % 4 === 0) {
        if (Number(year) % 100 === 0) {
            if (Number(year) % 400 === 0) {
                result.textContent = (`Год високосный`);
            } else {
                result.textContent = (`Год не високосный`);
            }
        } else{
        result.textContent = (`Год високосный`);
        }
    } else{
        result.textContent = (`Год не високосный`);
    }
  });
