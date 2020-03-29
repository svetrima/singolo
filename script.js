const menuLinks = document.querySelector('.navigation');
const portfolioTags = document.querySelector('.portfolio__tags');
const portfolioGalleryBlock = document.querySelector('.layout-4-columns');
const portfolioGalerryImg = document.querySelectorAll('div.gallery-block');

//navigation
menuLinks.addEventListener('click', (event) => {
        menuLinks.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    })

//portfolio tags
portfolioTags.addEventListener('click', (event) => {
    portfolioTags.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
    event.target.classList.add('tag_selected');
	shuffleGallery();

})
//portfolio gallery
function shuffleGallery() {
    portfolioGalerryImg.forEach(e => {
        e.style.order = Math.floor(Math.random() * 3);
    });
}
portfolioGalleryBlock.addEventListener('click', (event) => {
    portfolioGalleryBlock.querySelectorAll('.gallery-block__item').forEach(el => el.classList.remove('outline'));
    event.target.classList.add('outline');
})

//form
const buttonSubmit = document.getElementById('submit');
const buttonClose = document.getElementById('close-btn');

buttonSubmit.addEventListener('click', () => {
    const inputSubject = document.getElementById('subject').value.toString();
    const textField = document.getElementById('text-field').value;
   // const inputEmail = document.getElementById('email').value.toString();
   // const inputName = document.getElementById('name').value.toString();
    if (inputSubject == '') {
        document.getElementById('theme').innerText = 'Без темы';
    } else {
        document.getElementById('theme').innerText = "Тема:  " + inputSubject;
    }
    if (textField == '') {
        document.getElementById('description').innerText = 'Без описания';
    } else {
        document.getElementById('description').innerText = "Описание:  " + textField;
    }

    document.getElementById('popup-block').classList.remove('hidden');

})
buttonClose.addEventListener('click', () => {
    document.getElementById('theme').innerText = '';
    document.getElementById('description').innerText = '';
    document.getElementById('popup-block').classList.add('hidden');
    document.getElementById('form-feedback').reset();
})
//burger
	const clickBurger = document.getElementById('burger');
	clickBurger.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.burger-menu').classList.toggle('show');
    document.querySelector('.header__navigation').classList.toggle('show');
});