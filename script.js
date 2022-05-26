// m = milliseconds
// s = seconds
// mt =minutes
// h = hours

let [m,s,mt,h] = [0,0,0,0];
let timerRef = document.querySelector('.timeDisplay');
let int = null;

//start button event
document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

//pause button event
document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
});

//reset button event
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [m,s,mt,h] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

//function to display time
function displayTimer(){
    m+=10;
    if(m == 1000){
        m= 0;
        s++;
        if(s == 60){
            s = 0;
            mt++;
            if(mt == 60){
                mt = 0;
                h++;
            }
        }
    }
    //if hour value is less than 10 it will 0h where h is hour vlue
    // if hour value >10 then 0 will be removed
    var hour = h< 10 ? "0" + h : h;
    var minutes = mt < 10 ? "0" + mt : mt;
    var seconds = s < 10 ? "0" + s : s;
    var milliseconds = m < 10 ? "00" + m : m < 100 ? "0" + m: m;

    timerRef.innerHTML = ` ${hour} : ${minutes} : ${seconds} : ${milliseconds}`;
}
