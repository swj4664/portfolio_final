
window.onload = function() {
// 리사이징
if (window.innerWidth > 1200) {
    window.addEventListener('resize', () => {
        setTimeout(() => {
            location.reload();
        }, 1200)
    });
}

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
// let flag = false;

let length0 = document.getElementById('section2').getBoundingClientRect()
let position0 = (length0.top + window.pageYOffset)

let length = document.getElementById('section3').getBoundingClientRect()
let position = (length.top + window.pageYOffset)



let length2 = document.getElementById('section4').getBoundingClientRect()
let position3 = document.getElementById('section4').offsetTop
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


    let header_li = this.document.querySelectorAll('.menu li')
    if (position - 100 > scrollTop && position0 - 100 > scrollTop) {
        header_li[0].style.color = '#f67777';
        header_li[0].style.fontWeight = '700';
    } else {
        header_li[0].style.color = '#2E2E2E';
        header_li[0].style.fontWeight = '100';
    }

    if (position0 - 100 <= scrollTop && position - 100 > scrollTop) {
        header_li[1].style.color = '#f67777';
        header_li[1].style.fontWeight = '700';
    } else {
        header_li[1].style.color = '#2E2E2E';
        header_li[1].style.fontWeight = '100';
    }

    if (position - 100 <= scrollTop && position2 - 301 > scrollTop && scrollHeight !== scrollTop) {
        header_li[2].style.color = '#f67777';
        header_li[2].style.fontWeight = '700';
    } else {
        header_li[2].style.color = '#2E2E2E';
        header_li[2].style.fontWeight = '100';
    }

    if (position2 - 301 <= scrollTop || scrollHeight == scrollTop) {
        header_li[3].style.color = '#f67777';
        header_li[3].style.fontWeight = '700';
    } else {
        header_li[3].style.color = '#2E2E2E';
        header_li[3].style.fontWeight = '100';
    }

    let section2_title = document.querySelector('#section2 svg')
    let position0_anim = length0.height / 5
    let position0_anim_end = position0 + length0.height
    if (position0_anim < scrollTop && position0_anim_end > scrollTop) {
        section2_title.style.display = 'block'
    } else {
        section2_title.style.display = 'none'
    }
});


// section2 title animation
window.addEventListener('scroll', function () {
    let scrollTop2 = Math.floor(window.scrollY || window.pageYOffset || document.documentElement.scrollTop);
    let sect2_title = [...document.querySelectorAll('.sec2_title h2')];
    let title_slide = scrollTop2 / 1.2
    let title_length = 200 - title_slide
    let title_length2 = -1500 + title_slide
    sect2_title[1].style.transform = `translateX(${title_length}px)`
    sect2_title[0].style.transform = `translateX(${title_length2}px)`
})


document.querySelector('.home').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
document.querySelector('.value').addEventListener('click', () => {
    scrollTo({ top: position0, behavior: 'smooth' })
})
document.querySelector('.pofol').addEventListener('click', () => {

    scrollTo({ top: position, behavior: 'smooth' })
})
document.querySelector('.skill').addEventListener('click', () => {
    scrollTo({ top: position2 - 300, behavior: 'smooth' })
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

// 마우스 커서 이벤트
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
})

document.addEventListener('click', () => {
    cursor.style.transform = 'scale(5)'
    cursor.style.opacity = '0'
    cursor.style.transitionDuration = '.3s'
    setTimeout(() => {
        cursor.style.transitionDuration = '0s'
        cursor.style.transform = 'scale(1)'
        cursor.style.opacity = '1'
    }, 300)
})


const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// let iconG = document.querySelector('.iconG')
// let Icon3d = document.querySelector('.Icon3d')
// let skillArticle = document.querySelector('.#section3 .article')
// iconG.style.display = 'none'
if (screenWidth < 960) {
    cursor.style.display = 'none'
    // iconG.style.display = 'flex'
    // Icon3d.style.display = 'none'
    // skillArticle.style.background = 'white'
}

// 이름 애니메이션

// const titleName = document.querySelectorAll('.title path');

// for(let i = 0; i < titleName.length; i++){
//     console.log(`letter ${i} is ${titleName[i].getTotalLength()}`);
// }


let article = document.querySelectorAll('.article')
observer.observe(article[0])
observer.observe(article[1])
observer.observe(article[2])
observer.observe(article[3])
observer.observe(article[4])
observer.observe(article[5])
observer.observe(article[6])

article[5].addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        alert('진행중인 프로젝트입니다.')
    }
})
}