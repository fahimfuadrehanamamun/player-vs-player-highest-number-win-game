
let player1btn=document.getElementById('player1btn')
let player2btn=document.getElementById('player2btn')

let showInputPlayer1=document.getElementById('showInputPlayer1')
let showInputPlayer2=document.getElementById('showInputPlayer2')

let increasedNumberPlayer1=document.getElementById("increasedNumberPlayer1")
let increasedNumberPlayer2=document.getElementById("increasedNumberPlayer2")

let winingScore=document.getElementById('winingScore')
let inputWiningNumber=document.getElementById('inputWiningNumber')
let win=document.getElementById('win');
let reset=document.getElementById('reset');

console.log(player1btn);
console.log(player2btn);
console.log(showInputPlayer1);
console.log(showInputPlayer2);
console.log(increasedNumberPlayer1);
console.log(increasedNumberPlayer2);
console.log(winingScore);
let player1=0;
let player2=0;
// showInputPlayer1=[];
winningNumber=20;
player1btn.addEventListener('click',()=>{
    player1Game();
});
player2btn.addEventListener('click',()=>{
    player2Game();
});
reset.addEventListener('click',()=>{
    gameReset()
})


function player1Game(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    showInputPlayer1.innerHTML=randomNumber;
    // showInputPlayer1.push(randomNumber);
    player1=player1+=randomNumber;
    increasedNumberPlayer1.textContent=player1;
    player1btn.disabled = true;
    player2btn.disabled=false;
    if (player1>=winningNumber) {
        increasedNumberPlayer1.innerHTML=`${player1}! You are win`
        player1btn.disabled=true;
        player2btn.disabled=true;
    }
}

function player2Game(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    showInputPlayer2.innerHTML=randomNumber;
    
    // showInputPlayer1.push(randomNumber);
    player2=player2+=randomNumber;
    increasedNumberPlayer2.textContent=player2;
    player1btn.classList.add('disabled');
    player2btn.classList.remove('disabled');
    player2btn.disabled =true;
    player1btn.disabled=false;
    if (player2>=winningNumber) {
        increasedNumberPlayer2.innerHTML=`${player2}! You are win`
        player1btn.disabled=true;
        player2btn.disabled=true;

    }
}

inputWiningNumber.addEventListener('change',()=>{
    winningNumber=inputWiningNumber.value;
    winingScore.textContent=winningNumber;
    // console.log(wininngNumber);    
})


function gameReset() {
showInputPlayer1.textContent='';
showInputPlayer2.textContent='';
increasedNumberPlayer1.textContent='';
player1=0;
player2=0;
increasedNumberPlayer2.textContent='';
// winingScore.textContent=winningNumber;
inputWiningNumber.innerHTML='';
player1btn.disabled=false;
player2btn.disabled=false;


}
