const dropdown1 = document.querySelector('.dropdown1')
const dropdown2 = document.querySelector('.dropdown2')
const dropdown3 = document.querySelector('#dropdown3')
const dropdown4 = document.querySelector('#dropdown4')
const listShow = document.querySelector('.nav1')
const listsShow = document.querySelector('.nav2')
const bars = document.querySelector('#bars')
const xmark = document.querySelector('#xmark')
const mobile = document.querySelector('.mobile')

dropdown1.addEventListener('mouseenter', function () {
    dropdown1.classList.add('angel-off')
    dropdown1.nextElementSibling.classList.add('angel-on')
    dropdown1.nextElementSibling.nextElementSibling.classList.add('on-dropdown1')

});

let angleUp1 = dropdown1.nextElementSibling.nextElementSibling;

angleUp1.addEventListener('mouseleave', function () {
    dropdown1.classList.remove('angel-off')
    dropdown1.nextElementSibling.classList.remove('angel-on')
    dropdown1.nextElementSibling.nextElementSibling.classList.remove('on-dropdown1')

});

dropdown3.addEventListener('click', function () {
    listShow.classList.add('on-dropdown1')
    dropdown1.classList.add('angel-off')
    dropdown1.nextElementSibling.classList.add('angel-on')

})

dropdown2.addEventListener('mouseenter', function () {
    dropdown2.classList.add('angel-off')
    dropdown2.nextElementSibling.classList.add('angel-on')
    dropdown2.nextElementSibling.nextElementSibling.classList.add('on-dropdown2')

})

let angleUp2 = dropdown2.nextElementSibling.nextElementSibling;

angleUp2.addEventListener('mouseleave', function () {
    dropdown2.classList.remove('angel-off')
    dropdown2.nextElementSibling.classList.remove('angel-on')
    dropdown2.nextElementSibling.nextElementSibling.classList.remove('on-dropdown2')

});
dropdown4.addEventListener('click', function () {
    dropdown2.classList.add('angel-off')
    dropdown2.nextElementSibling.classList.add('angel-on')
    listsShow.classList.add('on-dropdown2')
})

bars.addEventListener('click', function () {
    mobile.classList.add('mobile-show')
})
xmark.addEventListener('click', function () {
    mobile.classList.remove('mobile-show')
})