let boxNum = 0;
let openDetails1 = function(){
  boxNum = 1;
  document.getElementById('project1').click();
  window.removeEventListener('mouseup', event2);
  window.removeEventListener('mouseup', event3);
  window.addEventListener('mouseup', event1);
}
let openDetails2 = function(){
  boxNum = 2;
  document.getElementById('project2').click();
  window.removeEventListener('mouseup', event1);
  window.removeEventListener('mouseup', event3);
  window.addEventListener('mouseup', event2);
}
let openDetails3 = function(){
  boxNum = 3;
  document.getElementById('project3').click();
  window.removeEventListener('mouseup', event1);
  window.removeEventListener('mouseup', event2);
  window.addEventListener('mouseup', event3);
}
function event1(event){
  let box1 = document.getElementById('project1id');
  if (event.target != box1&& !box1.contains(event.target)){
      //console.log("hello",document.getElementById('openProject1').getElementsByClassName('close')[0]);
        document.getElementById('openProject1').getElementsByClassName('close')[0].click();
  }
}
function event2(event){
  let box2 = document.getElementById('project2id');
  if (event.target != box2&& !box2.contains(event.target)){
      //console.log("hello",document.getElementById('openProject1').getElementsByClassName('close')[0]);
        document.getElementById('openProject2').getElementsByClassName('close')[0].click();
  }
}
function event3(event){
  let box3 = document.getElementById('project3id');
  if (event.target != box3&& !box3.contains(event.target)){
      //console.log("hello",document.getElementById('openProject1').getElementsByClassName('close')[0]);
        document.getElementById('openProject3').getElementsByClassName('close')[0].click();
  }
}
