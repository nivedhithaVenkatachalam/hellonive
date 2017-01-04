let openDetails1 = function(){
  document.getElementById('project1').click();
}
window.addEventListener('mouseup', function(event){
  let box = document.getElementById('project1id');
  if (event.target != box&& !box.contains(event.target)){
      //console.log("hello",document.getElementById('openProject1').getElementsByClassName('close')[0]);
        document.getElementById('openProject1').getElementsByClassName('close')[0].click();
    }
});
