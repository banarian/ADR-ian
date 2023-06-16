const buttonCapability = document.getElementById("button-capability")
const buttonLearning = document.getElementById("button-learning")
const buttonIntrest = document.getElementById("button-intrest")

const childOne = document.getElementsByClassName("child1")
const childTwo = document.getElementsByClassName("child2")
const childThree = document.getElementsByClassName("child3")

const textOne = document.getElementsByClassName("text1")
const textTwo = document.getElementsByClassName("text2")
const textThree = document.getElementsByClassName("text3")

const buttonAboutGo = document.getElementById("about-me-go")
const buttonAboutBack = document.getElementById("about-me-back")
const aboutContent = document.querySelector(".about-me-content")
const aboutTitle = document.querySelector(".about-me-title")

const buttonIntrestGo = document.getElementById("intrest-go")
const buttonIntrestBack = document.getElementById("intrest-back")
const intrestContent = document.querySelector(".intrest-content")
const intrestTitle = document.querySelector(".intrest-title")

const exploreButton = document.getElementById("about-nav")
const exploreButton2 = document.getElementById("explore-button")

const learningButton = document.getElementById("learning-nav")
const learningSpacer = document.getElementById("learning-spacer")

const socialButton = document.getElementById("social-nav")
const socialPlace = document.getElementById("social")

const heroImage = document.getElementById("hero-img")

const toggle = document.getElementById("toggle")
const rootElement = document.documentElement;
const spacer = document.getElementsByClassName("spacer")
const learningSpacerTwo = document.getElementById("learning-spacer2")
const spacerBack = document.getElementById("spacer-back")

let bol = true//true is night

toggle.addEventListener("click", function(){
    bol = !bol
    console.log(bol)

    if (bol == true){
        rootElement.style.setProperty("--base-background-color", "rgba(19, 19, 19, 1)")
        rootElement.style.setProperty("--base-text-color", "rgba(255, 255, 255)")
        rootElement.style.setProperty("--primary-color", "rgba(250, 202, 56)")
        rootElement.style.setProperty("--secondary-color", "rgb(15, 222, 111)")
        rootElement.style.setProperty("--third-colorr", "rgba(163, 13, 98)")
        rootElement.style.setProperty("--fourth-color", "rgba(0, 110, 255)")
        rootElement.style.setProperty("--base-star", "rgba(59, 59, 59)")

        for(let i = 0 ; i < spacer.length ; i++){
            spacer[i].style.backgroundImage = "url(assets/spacer.svg)"
        }

        spacerBack.style.backgroundImage = "url(assets/back-spacer.svg)"
        learningSpacer.style.backgroundImage = "url(assets/back-spacer2.svg)"
        learningSpacerTwo.style.backgroundImage = "url(assets/spacer2.svg)"
        
    }else if (bol == false){
        rootElement.style.setProperty("--base-background-color", "rgb(248,243,239)")
        rootElement.style.setProperty("--base-text-color", "rgba(19, 19, 19, 1)")
        rootElement.style.setProperty("--primary-color", "rgb(15, 222, 111)")
        rootElement.style.setProperty("--secondary-color", "rgb(163, 13, 98)")
        rootElement.style.setProperty("--third-color", "rgb(250,202,56)")
        rootElement.style.setProperty("--fourth-color", "rgb(0, 110, 255)")
        rootElement.style.setProperty("--base-star", "rgba(59, 59, 59)")

        for(let i = 0 ; i < spacer.length ; i++){
            spacer[i].style.backgroundImage = "url(assets/light-spacer.svg)"
        }

        spacerBack.style.backgroundImage = "url(assets/light-back-spacer.svg)"
        learningSpacer.style.backgroundImage = "url(assets/light-spacer-back2.svg)"
        learningSpacerTwo.style.backgroundImage = "url(assets/spacer-last.svg)"

    }
})








window.onload = function() {
    heroImage.addEventListener("animationend", function() {
        heroImage.classList.remove("load-animation");
        heroImage.classList.add("loop-animation");
    });
};

exploreButton.addEventListener("click", function(){
    buttonIntrestBack.scrollIntoView({ behavior : "smooth",block : "end"})
})

exploreButton2.addEventListener("click", function(){
    buttonIntrestBack.scrollIntoView({ behavior : "smooth",block : "end"})
})

learningButton.addEventListener("click", function(){
     learningSpacer.scrollIntoView({ behavior : "smooth",block : "end"})
})

socialButton.addEventListener("click", function(){
    socialPlace.scrollIntoView({ behavior : "smooth",block : "end"})
})

//ANCHOR - stuff

buttonIntrestGo.addEventListener("click", function(){
    aboutContent.style.left = "120%"
    aboutTitle.style.transform = "translateX(0)"

    intrestContent.style.right = "0"
    intrestTitle.style.transform = "translateX(120%)"
})

buttonIntrestBack.addEventListener("click", function(){
    intrestContent.style.right = "120%"
    intrestTitle.style.transform = "translateX(0)"
})

buttonAboutGo.addEventListener("click", function(){
    intrestContent.style.right = "120%"
    intrestTitle.style.transform = "translateX(0)"
    
    aboutContent.style.left = "0"
    aboutTitle.style.transform = "translateX(-120%)"
})

buttonAboutBack.addEventListener("click", function(){
    aboutContent.style.left = "120%"
    aboutTitle.style.transform = "translateX(0)"
})

buttonCapability.addEventListener("click", function(){


    buttonLearning.style.backgroundColor ="transparent"
    buttonLearning.style.color ="var(--third-color)"
    buttonIntrest.style.backgroundColor ="transparent"
    buttonIntrest.style.color ="var(--fourth-color)"

    for (let i = 0 ;  i < childTwo.length ; i++ ){
        childTwo[i].style.backgroundColor = "var(--base-star)"
        childTwo[i].style.transform = "scale(1)"
    }

    for (let i = 0 ;  i < childThree.length ; i++ ){
        childThree[i].style.backgroundColor = "var(--base-star)"
        childThree[i].style.transform = "scale(1)"
    }

    for( let i = 0 ; i < textThree.length ; i++) {
        textThree[i].style.transform = "scale(0)"
    }

    for( let i = 0 ; i < textTwo.length ; i++) {
        textTwo[i].style.transform = "scale(0)"
    }
    
    
    buttonCapability.style.backgroundColor ="var(--secondary-color)"
    buttonCapability.style.color ="var(--base-background-color)"

    for (let i = 0 ;  i < childOne.length ; i++ ){
        childOne[i].style.backgroundColor = "var(--secondary-color)"
        childOne[i].style.transform = "scale(1.5)"
    }

    for( let i = 0 ; i < textOne.length ; i++) {
        textOne[i].style.transform = "scale(1)"
    }

})

buttonLearning.addEventListener("click", function(){

    buttonIntrest.style.backgroundColor ="transparent"
    buttonIntrest.style.color ="var(--fourth-color)"
    buttonCapability.style.backgroundColor ="transparent"
    buttonCapability.style.color ="var(--secondary-color)"

    for (let i = 0 ;  i < childThree.length ; i++ ){
        childThree[i].style.backgroundColor = "var(--base-star)"
        childThree[i].style.transform = "scale(1)"
    }

    for (let i = 0 ;  i < childOne.length ; i++ ){
        childOne[i].style.backgroundColor = "var(--base-star)"
        childOne[i].style.transform = "scale(1)"
    }

    for( let i = 0 ; i < textThree.length ; i++) {
        textThree[i].style.transform = "scale(0)"
    }

    for( let i = 0 ; i < textOne.length ; i++) {
        textOne[i].style.transform = "scale(0)"
    }

    buttonLearning.style.backgroundColor ="var(--third-color)"
    buttonLearning.style.color ="var(--base-background-color)"

    for (let i = 0 ;  i < childTwo.length ; i++ ){
        childTwo[i].style.backgroundColor = "var(--third-color)"
        childTwo[i].style.transform = "scale(1.5)"
    }

    for( let i = 0 ; i < textTwo.length ; i++) {
        textTwo[i].style.transform = "scale(1)"
    }
})

buttonIntrest.addEventListener("click", function(){

    buttonLearning.style.backgroundColor ="transparent"
    buttonLearning.style.color ="var(--third-color)"
    buttonCapability.style.backgroundColor ="transparent"
    buttonCapability.style.color ="var(--secondary-color)"

    for (let i = 0 ;  i < childOne.length ; i++ ){
        childOne[i].style.backgroundColor = "var(--base-star)"
        childOne[i].style.transform = "scale(1)"
    }

    for (let i = 0 ;  i < childTwo.length ; i++ ){
        childTwo[i].style.backgroundColor = "var(--base-star)"
        childTwo[i].style.transform = "scale(1)"
    }

    for( let i = 0 ; i < textOne.length ; i++) {
        textOne[i].style.transform = "scale(0)"
    }

    for( let i = 0 ; i < textTwo.length ; i++) {
        textTwo[i].style.transform = "scale(0)"
    }

    buttonIntrest.style.backgroundColor ="var(--fourth-color)"
    buttonIntrest.style.color ="var(--base-background-color)"

    for (let i = 0 ;  i < childThree.length ; i++ ){
        childThree[i].style.backgroundColor = "var(--fourth-color)"
        childThree[i].style.transform = "scale(1.5)"
    }

    for( let i = 0 ; i < textThree.length ; i++) {
        textThree[i].style.transform = "scale(1)"
    }


})

//ANCHOR - button place