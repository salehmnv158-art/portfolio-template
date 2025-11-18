// Navbar Link

let navbarpart6 = document.querySelector('.navbar-part-6');

navbarpart6.addEventListener('mouseenter',()=>{
    navbarpart6.classList.add('navbar-part-6-active')
    navbarpart6.classList.remove('navbar-part-6-passive')
})
navbarpart6.addEventListener('mouseleave',()=>{
    navbarpart6.classList.remove('navbar-part-6-active')
    navbarpart6.classList.add('navbar-part-6-passive')
})

let getstarted = document.querySelector('.get-started');

getstarted.addEventListener('mouseenter',()=>{
    getstarted.classList.add('get-started-active')
    getstarted.classList.remove('get-started-passive')
})
getstarted.addEventListener('mouseleave',()=>{
    getstarted.classList.remove('get-started-active')
    getstarted.classList.add('get-started-passive')
})

// Alt Bar Link

let altpart = document.querySelectorAll('.alt-part');

for (let i = 0; i < altpart.length; i++) {
    altpart[i].addEventListener('mouseenter',()=>{
        altpart[i].classList.add('alt-part-active')
        altpart[i].classList.remove('alt-part-passive')
    })
        altpart[i].addEventListener('mouseleave',()=>{
        altpart[i].classList.remove('alt-part-active')
        altpart[i].classList.add('alt-part-passive')
    })
}

let navbutact = document.querySelector('.alt-activate-button');
let navbutdeact = document.querySelector('.alt-deactivate-button');
let altbar = document.querySelector('.alt');

navbutact.addEventListener('click', ()=>{
    navbutact.classList.add('display-none');
    navbutdeact.classList.remove('display-none');
    altbar.classList.remove('display-none');
})

navbutdeact.addEventListener('click', ()=>{
    navbutdeact.classList.add('display-none');
    navbutact.classList.remove('display-none');
    altbar.classList.add('display-none');
})

// Body Service Link

let link1 = document.querySelector('.link-1');

link1.addEventListener('mouseenter',()=>{
    link1.classList.add('link-1-active')
    link1.classList.remove('link-1-passive')
})
link1.addEventListener('mouseleave',()=>{
    link1.classList.remove('link-1-active')
    link1.classList.add('link-1-passive')
})

let link2 = document.querySelector('.link-2');

link2.addEventListener('mouseenter',()=>{
    link2.classList.add('link-2-active')
    link2.classList.remove('link-2-passive')
})
link2.addEventListener('mouseleave',()=>{
    link2.classList.remove('link-2-active')
    link2.classList.add('link-2-passive')
})

// Body Call Link

let calllink = document.querySelector('.get-in-touch');

calllink.addEventListener('mouseenter',()=>{
    calllink.classList.add('get-in-touch-active')
    calllink.classList.remove('get-in-touch-passive')
})
calllink.addEventListener('mouseleave',()=>{
    calllink.classList.remove('get-in-touch-active')
    calllink.classList.add('get-in-touch-passive')
})