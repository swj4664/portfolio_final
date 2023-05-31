let up = document.querySelector('.up')
let flag = false;

window.addEventListener('scroll', function () {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    let scrollPercent = (scrollTop / scrollHeight) * 100;
    let roundedScrollPercent = Math.round(scrollPercent);
    let bar = this.document.querySelector('.bar');

    bar.style.width = roundedScrollPercent + '%'
    if (roundedScrollPercent !== 0) {
        up.classList.add('show')
    } else {
        up.classList.remove('show')
    }

    if (scrollTop !== 0) {
        document.querySelector('.scroll').style.opacity = '0'
    } else {
        document.querySelector('.scroll').style.opacity = '1'
    }

    let video = document.getElementById('video')
    let videoLength = video.getBoundingClientRect()
    let videoPosition = (videoLength.top + window.pageYOffset)
    
console.log(scrollTop)
console.log('_________')
console.log(videoPosition+200)

    if(!flag){
        if (scrollTop > videoPosition-300) {
            video.autoplay = true
            video.load();
            flag = true
        }
    } else if (scrollTop < videoPosition-300 || scrollTop > videoPosition+200){
        flag = false
        video.autoplay = false
        video.load();
    }

});
document.querySelector('.home').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
document.querySelector('.pofol').addEventListener('click', () => {
    let length = document.getElementById('section2').getBoundingClientRect()
    let position = (length.top + window.pageYOffset)
    scrollTo({ top: position - 100, behavior: 'smooth' })
})
document.querySelector('.skill').addEventListener('click', () => {
    let length2 = document.getElementById('section3').getBoundingClientRect()
    let position2 = (length2.top + window.pageYOffset)
    scrollTo({ top: position2, behavior: 'smooth' })
})




up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

let observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if (box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0px)';
        } else {
            box.target.style.opacity = 0;
            box.target.style.transform = 'translateY(100px)';
        }
    })
})

let icon = document.querySelectorAll('.icon')
let iconText = document.querySelectorAll('.icon h3')

for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener('mouseover', () => {
        icon[i].style.transform = 'translateY(-20px)'
        iconText[i].style.visibility = 'visible'
        iconText[i].style.opacity = '1'
    })

    icon[i].addEventListener('mouseout', () => {
        icon[i].style.transform = 'translateY(0px)'
        iconText[i].style.visibility = 'hidden'
        iconText[i].style.opacity = '0'
    })
}





let article = document.querySelectorAll('.article')
observer.observe(article[0])
observer.observe(article[1])
observer.observe(article[2])
observer.observe(article[3])
observer.observe(article[4])


