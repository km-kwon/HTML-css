function setClock(){
  var timer = new Date();
  var hour = edit_time(timer.getHours());
  var min = edit_time(timer.getMinutes());
  var sec = edit_time(timer.getSeconds());
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}

function edit_time(time){
  if(time<10){
    return "0" + time;
  }
  else{
    return time;
  }
}

window.onload = function(){
  setClock();
  setInterval(setClock,1000);
}

/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
function sideMenu() {
  var temp = document.querySelector(".submenu");
  temp.classList.toggle("active");
}

/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/