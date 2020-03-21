const menuLinks = document.querySelector('.navigation');
const portfolioTags = document.querySelector('.portfolio__tags');
const portfolioGalleryBlock = document.querySelector('.layout-4-columns');

//navigation
menuLinks.addEventListener('click', (event) => {
        menuLinks.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    })

//portfolio tags
portfolioTags.addEventListener('click', (event) => {
    portfolioTags.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
    event.target.classList.add('tag_selected');

})
//portfolio gallery
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
    //  const inputEmail = document.getElementById('email').value;
    //  const inputName = document.getElementById('name').value;
    if (inputSubject == '') {
        document.getElementById('theme').innerText = 'Без темы';
    } else {
        document.getElementById('theme').innerText = "Тема: " + inputSubject;
    }
    if (textField == '') {
        document.getElementById('description').innerText = 'Без описания';
    } else {
        document.getElementById('description').innerText = "Описание: " + textField;
    }

    document.getElementById('popup-block').classList.remove('hidden');

})
buttonClose.addEventListener('click', () => {
    document.getElementById('theme').innerText = '';
    document.getElementById('description').innerText = '';
    document.getElementById('popup-block').classList.add('hidden');
    document.getElementById('form-feedback').reset();
})