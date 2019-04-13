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
    preventDefault();
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
// newBody.addEventListener('mouseover', function(event){
//     event.target.style.color = 'orange';

//     setTimeout(function(){
//         event.target.style.color = '';
//     }, 2000);
// })

let firstPick = document.querySelector('body > div > section.content-pick > div:nth-child(1)');
// #11
firstPick.addEventListener('mouseover', function(event){
    // event.target.style.backgroundColor = 'orange';
    event.target.style.color = 'yellow';
    // setTimeout(function(){
    //     event.target.style.color = '';
    //     event.target.style.backgroundColor = '';
    // }, 20000);
})
// #12
firstPick.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
})

let secondPick = document.querySelector('body > div > section.content-pick > div:nth-child(2)');
// #13
secondPick.addEventListener('mouseover', function(event){
    // event.target.style.backgroundColor = 'orange';
    event.target.style.color = 'yellow';
    // setTimeout(function(){
    //     event.target.style.color = '';
    //     event.target.style.backgroundColor = '';
    // }, 20000);
})
// #14
secondPick.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
})

let thirdPick = document.querySelector('body > div > section.content-pick > div:nth-child(3)');
// #15
thirdPick.addEventListener('mouseover', function(event){
    // event.target.style.backgroundColor = 'orange';
    event.target.style.color = 'yellow';
    // setTimeout(function(){
    //     event.target.style.color = '';
    //     event.target.style.backgroundColor = '';
    // }, 20000);
})
// #16
thirdPick.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = '';
    event.target.style.color = '';
})


let myBtns = document.getElementsByClassName('btn')['0', '1', '2'];
// #something I lost count
myBtns.addEventListener('click', function(event){
    alert('You Made A Great Choice!')
});


// myBtns.addEventListener('mouseover', function(event){
//     event.target.style.backgroundColor = 'skyblue';
//     event.target.style.color = 'yellow';
// });

let theFoot = document.querySelector('body > footer')
theFoot.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'skyblue';
    event.target.style.color = 'orange';
});


