var min =0;
var sec = 0;
var msec = 0;
var min_text = document.getElementById('min');
var sec_text = document.getElementById('sec');
var msec_text = document.getElementById('msec');
var interval;

function timer(){
    msec++
    msec_text.innerHTML = msec;
    if (msec >= 100 ){
        sec++
        sec_text.innerHTML = sec;
        msec = 0;

    }else if (sec >= 5){
        min++;
        min_text.innerHTML = min;
        sec = 0;
    }

}
function stop(){
    clearInterval(interval);
    document.getElementById("myBtn").disabled = false;
  
   
    
}
function start(){
interval = setInterval(timer,10);
document.getElementById("myBtn").disabled = false;
document.getElementById("myBtn").disabled = true;
}


function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    min_text.innerHTML = min;
    sec_text.innerHTML = sec;
    msec_text.innerHTML = msec;

    stop();
    document.getElementById("myBtn").disabled = false;
   
}
