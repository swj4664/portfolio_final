setTimeout(function() {
let btn_g = [...document.querySelectorAll('.btn_g')]
let preBtn = [...document.querySelectorAll('.preBtn')]
let nextBtn = [...document.querySelectorAll('.nextBtn')]
let slide_g = [...document.querySelectorAll('.slide_g')]
let slide = document.querySelector('.slide')
let slideLength = slide.clientWidth
let slideLengthAll = []
let num = [0, 0, 0, 0, 0, 0, 0]

let slideAll = []
let slideAll1 = [...document.querySelectorAll('.article1 .slide')]
let slideAll2 = [...document.querySelectorAll('.article2 .slide')]
let slideAll3 = [...document.querySelectorAll('.article3 .slide')]
let slideAll4 = [...document.querySelectorAll('.article4 .slide')]
let slideAll5 = [...document.querySelectorAll('.article5 .slide')]
let slideAll6 = [...document.querySelectorAll('.article6 .slide')]
let slideAll7 = [...document.querySelectorAll('.article7 .slide')]


slideAll.push(slideAll1, slideAll2, slideAll3, slideAll4, slideAll5, slideAll6, slideAll7)
for (let i = 0; i < slideAll.length; i++) {
    slideLengthAll.push(slideLength)

    for (let a = 0; a < slideAll[i].length; a++) {
        if (slideAll[i].length > 1) {
            const newDiv = document.createElement("div");
            const btnDot_g = [...document.querySelectorAll(".dot_g")]
            btnDot_g[i].appendChild(newDiv);
        }
    }

}
const btnDot = [...document.querySelectorAll(".dot_g div")];
for (let i = 0; i < btnDot.length; i++) {
    btnDot[i].classList.add('dot')
}


let dot_G = [...document.querySelectorAll(".dot_g")]
dot_G.map(function (a, i) {
    let dots = dot_G[i].children
    if(dots.length > 0){
        dots[0].style.opacity = '1'
    }
    for (let b = 0; b < dots.length; b++) {
        dots[b].addEventListener('click', () => {
            let saveBtnVal = slideLength * -b
            slide_g[i].style.transform = `translateX(${saveBtnVal}px)`
            for(let c = 0; c < dots.length; c++){
                dots[c].style.opacity = '0.2';
            }
            dots[b].style.opacity = '1'
            num[i] = -b
        })
    }
})

btn_g.map(function (a, i) {
    if(slideAll[i].length < 2) {
        preBtn[i].style.display = 'none';
        nextBtn[i].style.display = 'none';
    }
})

btn_g.map(function (a, i) {
    let dots = dot_G[i].children
    preBtn[i].addEventListener('click', () => {
        if (num[i] !== 0) {
            num[i]++
            slide_g[i].style.transform = `translateX(${slideLengthAll[i] * num[i]}px)`
            for(let c = 0; c < dots.length; c++){
                dots[c].style.opacity = '0.2';
            }
            dots[num[i]*-1].style.opacity = '1'
        }
    })
})

btn_g.map(function (a, i) {
    let dots = dot_G[i].children
    nextBtn[i].addEventListener('click', () => {
        if (num[i] > -slideAll[i].length + 1) {
            num[i]--
            slide_g[i].style.transform = `translateX(${slideLengthAll[i] * num[i]}px)`
            for(let c = 0; c < dots.length; c++){
                dots[c].style.opacity = '0.2';
            }
            dots[num[i]*-1].style.opacity = '1'
        }
    })
})
}, 100);