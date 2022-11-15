const HRS = document.querySelector("#HRS"); // 시 인풋
const MIN = document.querySelector("#MIN"); // 분 인풋
const SEC = document.querySelector("#SEC"); // 초 인풋
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");

//1. 클릭했을때 setinterval 함수 작동
//2. 시 분 초를 총 초로 바꿔서 -1씩 줄어들게 하고 1초마다 새로 갱신된 초로 인풋창에 뿌려줌

let prevention; // 변수를 밖으로 빼주어야 기억할 수 있음. 함수 안에 잇으면 실행되고 종료될때 사라짐
startBtn.addEventListener("click", (e) => {
    clearInterval(prevention);
    prevention = setInterval(timer, 1000);

    
});

function timer() {
    let 시 = HRS.value !== "" || HRS.value <= 0 ? parseInt(HRS.value) * 60 * 60 : 0;
    let 분 = MIN.value !== "" || MIN.value <= 0 ? parseInt(MIN.value) * 60 : 0;
    let 초 = SEC.value !== "" || SEC.value <= 0 ? parseInt(SEC.value) : 0;

    let time = 시 + 분 + 초;
    
    if(time === 0){
        alert('입력을 해주세요')
        clearInterval(prevention);
    }
    else{
        time--;
        HRS.value =  Math.floor(time / 3600)
        MIN.value = Math.floor(time / 60)
        SEC.value = time % 60
    }
    

}

resetBtn.addEventListener('click',()=>{
    clearInterval(prevention);
    HRS.value = 0
    MIN.value = 0
    SEC.value = 0
})