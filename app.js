const currentImg = document.querySelector('.current-img');
const allImg = document.querySelectorAll('.all-img img');
allImg.forEach(function (img) {
    img.addEventListener('click', function (e) {
        currentImg.src = e.target.src

        currentImg.classList.add('animate-img');
        setTimeout(function () {
            currentImg.classList.remove('animate-img');
        }, 400)
    })
    
})