// Your code goes here

// Lets make the h1 for fun bus, fun
// const funH1 = document.querySelector('h1');
// funH1.addEventListener('mouseover', function(event){
//    event.target.style.color = 'yellow';
//     event.target.style.backgroundColor = 'skyblue';
//     event.relatedTarget.style.backgroundColor = ' skyblue';

//     setTimeout(function() {
//         event.target.style.color = "";
//         event.target.style.backgroundColor = '';
//         event.relatedTarget.style.backgroundColor = '';
//       }, 5000);

// });


let mainSky = document.querySelector('.main-navigation');
// #1
mainSky.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'yellow';
    event.target.style.backgroundColor = 'skyblue';
    event.relatedTarget.style.backgroundColor = ' skyblue';

    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.backgroundColor = '';
        event.relatedTarget.style.backgroundColor = '';
    }, 100000);
})

// #2
mainSky.addEventListener('mouseleave', function (event) {
    event.target.style.color = 'yellow';
    event.target.style.backgroundColor = 'orange';
    event.relatedTarget.style.backgroundColor = ' skyblue';
    
    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.backgroundColor = '';
        event.relatedTarget.style.backgroundColor = '';
    }, 100000);
})

let myNav = document.getElementsByTagName('nav')[0];
// #3
myNav.addEventListener('mouseover', function (event) {
    event.target.style.color = 'yellow';

    setTimeout(function(){
        event.target.style.color = '';        
    }, 100000);
})

let introP = document.querySelector('body > div > header > p');
// #4
introP.addEventListener('click', function(event){
    event.target.style.color = 'yellow';
    event.target.style.backgroundColor = 'skyblue';

    setTimeout(function(){
        event.target.style.color = '';        
        event.target.style.backgroundColor = '';
    }, 10000);
})
// #5
introP.addEventListener('dblclick', function(event){
    event.target.style.color = 'yellow';
    event.target.style.backgroundColor = 'goldenrod';

    setTimeout(function(){
        event.target.style.color = '';
        event.target.style.backgroundColor = '';        
    }, 10000);
})

let headH2 = document.querySelector('body > div > header > h2');
// #6
headH2.addEventListener('click', function(event){
    event.target.style.color = 'orange';
})

let busHead = document.querySelector('body > div > header > img');
// #7
busHead.addEventListener('click', function(event){
    let imageSource = event.target.src;
    document.body.style.background = `url(${imageSource})`
})

// #8
busHead.addEventListener('dblclick', function(event){
    document.body.style.background = ``;
})


let newBody = document.querySelector('body');
// #9
newBody.addEventListener('auxclick', function(event) {
    alert('That was an auxclick!')
})

// #10
newBody.addEventListener('mouseover', function(event){
    event.target.style.color = 'orange';

    setTimeout(function(){
        event.target.style.color = '';
    }, 2000);
})


