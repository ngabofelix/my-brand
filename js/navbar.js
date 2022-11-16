
const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('show')
})

links = document.getElementsByClassName('links')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ()=>{
        let active = document.querySelector('.active')
        active.classList.remove('active')
        links[i].classList.add('active')
        navbar.classList.remove('show')
    });
    
}

const nextBtn = document.getElementById('chevron_right')
const backBtn = document.getElementById('chevron_left')
const projectWrapper = document.getElementsByClassName('portifolio-wrapper')[0]
let singleProjectCard = document.querySelectorAll('.single-project-card')
// let sliderWidth = singleProjectCard[0].clientWidth + 20
let sliderWidth ;
let currentSlide = 0

if (singleProjectCard[0].clientWidth < 780){
    sliderWidth = singleProjectCard[0].clientWidth + 22
}else{
    sliderWidth = singleProjectCard[0].clientWidth + 20
}

console.log(singleProjectCard.length)

let init = () => {
    singleProjectCard.forEach((item, index, arr) =>{
        item.style.left = index * 33.33 + '%'
        item.style.width = 33.33 + '%'
    })
}
init()

let createDots = () => {
    for (let i = 0; i < singleProjectCard.length; i++) {
        let dot = document.createElement('span')
        document.getElementsByClassName('dots')[0].appendChild(dot)

        dot.addEventListener('click', () => {
            currentSlide = i
            handleClick(i)
        })
    }
    document.getElementsByClassName('dots')[0].children[0].classList.add('marked')
}
createDots()


let handleClick = (slideNumber) =>{
    projectWrapper.style.transform = "translateX( -" + sliderWidth * slideNumber  + "px)"

    updateDots()
}

nextBtn.addEventListener('click', ()=>{
    if(currentSlide >= singleProjectCard.length - 1){
        currentSlide = 0
        handleClick(0)
        return
    }
    currentSlide ++
    handleClick(currentSlide)
})
backBtn.addEventListener('click', ()=>{
    if(currentSlide <= 0){
        currentSlide = singleProjectCard.length - 1
        handleClick(singleProjectCard.length - 1)
        return
    }
    currentSlide --
    handleClick(currentSlide)
})
// automating slide

let interval = function(){
	if (currentSlide >= singleProjectCard.length -1){
		handleClick(0)
		currentSlide = 0
		return
	}
	currentSlide ++

	handleClick(currentSlide)
}
// setInterval(interval, 5000)

function updateDots(){
    let currentDot = document.querySelector('.marked')
    currentDot.classList.remove('marked')
    document.querySelector('.dots').children[currentSlide].classList.add('marked')
}

