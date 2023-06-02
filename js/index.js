// header

let menu = document.querySelector('.burger');
let menu_list = document.querySelector('.menu');
let menu_flag = false

let menu_x = document.querySelectorAll('span');


menu.addEventListener('click', () => {
    if (!menu_flag) {
        menu_list.style.visibility = 'visible'
        menu_list.style.transform = 'translateX(-80px)'
        menu_list.style.opacity = '1'
        menu_x[1].style.rotate = '-45deg'
        menu_x[2].style.rotate = '45deg'
        menu_x[2].style.opacity = '1'
        menu_x[0].style.opacity = '0'
        menu_x[3].style.opacity = '0'
        menu_flag = true
    } else {
        menu_list.style.visibility = 'hidden'
        menu_list.style.transform = 'translateX(50px)'
        menu_list.style.opacity = '0'
        menu_x[1].style.rotate = '0deg'
        menu_x[2].style.rotate = '0deg'
        menu_x[2].style.opacity = '0'
        menu_x[0].style.opacity = '1'
        menu_x[3].style.opacity = '1'
        menu_flag = false
    }


})





let up = document.querySelector('.up')
let flag = false;

let length = document.getElementById('section2').getBoundingClientRect()
let position = (length.top + window.pageYOffset)

let length2 = document.getElementById('section3').getBoundingClientRect()
let position3 = document.getElementById('section3').offsetTop
let body = document.querySelector('body').getBoundingClientRect()
var windowHeight = window.innerHeight;
let position2 = Math.floor(length2.top + window.pageYOffset);

let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );


window.addEventListener('scroll', function () {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollTop = Math.floor(window.scrollY || window.pageYOffset || document.documentElement.scrollTop);
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


    if (!flag) {
        if (scrollTop > videoPosition - 300) {
            video.autoplay = true
            video.load();
            flag = true
        }
    } else if (scrollTop < videoPosition - 300 || scrollTop > videoPosition + 200) {
        flag = false
        video.autoplay = false
        video.load();
    }
    let header_li = this.document.querySelectorAll('.menu li')
    if (position - 100 > scrollTop) {
        header_li[0].style.color = '#f67777';
        header_li[0].style.fontWeight = '700';
    } else {
        header_li[0].style.color = '#2E2E2E';
        header_li[0].style.fontWeight = '100';
    }

    if (position - 100 <= scrollTop && position2 - 181 > scrollTop && scrollHeight !== scrollTop ) {
        header_li[1].style.color = '#f67777';
        header_li[1].style.fontWeight = '700';
    } else {
        header_li[1].style.color = '#2E2E2E';
        header_li[1].style.fontWeight = '100';
    }

console.log(position2 -180);
console.log(scrollTop)
    if (  position2 - 181 <= scrollTop || scrollHeight == scrollTop) {
        header_li[2].style.color = '#f67777';
        header_li[2].style.fontWeight = '700';
    } else {
        header_li[2].style.color = '#2E2E2E';
        header_li[2].style.fontWeight = '100';
    }



});
document.querySelector('.home').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
document.querySelector('.pofol').addEventListener('click', () => {

    scrollTo({ top: position, behavior: 'smooth' })
})
document.querySelector('.skill').addEventListener('click', () => {
    scrollTo({ top: position2 - 180, behavior: 'smooth' })

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


