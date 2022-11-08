const HRS = document.querySelector("#HRS");
const MIN = document.querySelector("#MIN");
const SEC = document.querySelector("#SEC");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");



function start(){
    setInterval(timer,1000);
    console.log('1');
}

startBtn.addEventListener("click", start);

function timer() {
    // input값의 시간을 가져온다
    // 1초마다 반복하면서 input값의 벨류의 값을 줄여준다.
    let hour = parseInt(HRS.value);
    let min = parseInt(MIN.value);
    let sec = parseInt(SEC.value);

    if (hour < 0) return alert("시간이 잘못됐습니다");
    if (min < 0 && min > 60) return alert("분이 잘못됐습니다");
    if (sec < 0 && sec > 60) return alert("초가 잘못됐습니다");

    // 초의 범위를 패스하면
    // 초의 시간이 1씩 마이너스 한다.
    // 만약 초가 0이 될때, 분이 0보다 크다면 분을 -1 해주고 60을 채워라
    // 분이 0일때, 시가 0보다 크다면 시를 -1 해주고 분에 60을 채워라

    if (sec !== 0) {
        sec--;
    } else {
        if (min !== 0) {
            min--;
            sec = 60;
        }
        else{
            if(hour !== 0){
                hour--
                min = 60  
            }
            else{
                alert('타임종료')
            }
        }
    }

    HRS.value = hour == undefined ? 0 : hour
    MIN.value = min == undefined ? 0 : min
    SEC.value = sec == undefined ? 0 : sec
}


