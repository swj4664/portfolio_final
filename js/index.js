// const target = document.querySelector("#section1");
// const target_top = target.getBoundingClientRect().height;
// const html_scroll = document.querySelector("html");
// let isScrolled = false;



// window.addEventListener('scroll', () => {
//     if (!isScrolled && window.scrollY > 0) {
//         isScrolled = true;
//         html_scroll.scrollTo({ top: target_top, behavior: 'smooth' });
//     } else if (isScrolled && window.scrollY === 0) {
//         isScrolled = false;
//     }
// })

window.addEventListener('scroll', function() {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    let scrollPercent = (scrollTop / scrollHeight) * 100;
    let roundedScrollPercent = Math.round(scrollPercent);
    let bar = this.document.querySelector('.bar');

    
    bar.style.width = roundedScrollPercent+ '%'
  });


let observer =  new IntersectionObserver((e)=> {
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0px)';
        } else {
            box.target.style.opacity = 0;
            box.target.style.transform = 'translateY(100px)';
        }
    })
})


let article = document.querySelectorAll('.article')
observer.observe(article[0])
observer.observe(article[1])
observer.observe(article[2])


