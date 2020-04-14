// var link = document.querySelector('#link');
// link.addEventListener('click', function() {
//     console.log(111111);//어떤 동작()
//     //event.stopPropagation();//이벤트 동작 중지 해당 html의 동작은 감
//     event.preventDefault();//기능이 동작하지 않음

});
// var list = document.querySelector('#list');
// console.log(list.children);

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷 이벤트를 하나 쓰지만 동일한 효과
//         console.log('li');
//         event.stopPropagiton();//클릭하더라도 이벤트가 전파되지 않음
//     }
    
// }) ;

// document.body.addEventListener('click', function(){
//     console.log('body');
// });
// debugger;//개발자 도구에서 멈춤 콘솔에서 찍어볼수 있음
// for(var i = o; i < list.children.length; i++) {
//     list.children[i].addEventListener('click', function(){
//         console.log(1);
//     });
// }

// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, event,event.type,event.currentTarget);//arguments 넘어오는 인자를 모두 볼수 있는 변수
// }
// document.body.addEventListener('click', popup);

// function clickBody(){
//     console.log('click');
// }

// document.querySelector('.box').addEventListener('click', clickBody);
// document.querySelector('.box').addEventListener('click', function () {
//     console.log('click');
// });

// console.log(window.outerWidth);//현재 윈도우 사이즈

// console.log(window.name);

// //console.log(window.open('http://www.daum.net'));//특정도메인의 주소를 열수 있음

//window 최상위객체

//var debug = document.getElementById('debug');
//console.log(debug);

// var box = document.querySelector('.box');
// //console.log(box);
// var box2 = document.querySelectorAll('box');
// console.log(box2);

// var box = document.querySelector('#debug');
// console.log(box);

// var div = document.createElement('div');
// // console.log(div);
// div.style.border = '1px solid #000';
// div.innerHTML = 'Hello';

// document.body.appendChild(div);

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

// var debug = document.getElementById('debug');
// //debug.remove();

// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);//리스트의 첫번 째 자식을 지움