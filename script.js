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