const menuLinks = document.querySelector('.navigation');
const portfolioTags = document.querySelector('.portfolio__tags');
const portfolioGalleryBlock = document.querySelector('.gallery-block');

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