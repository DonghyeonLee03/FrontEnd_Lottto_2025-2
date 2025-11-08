const createNum = document.querySelectorAll("button");
const lotto = document.querySelector(".lotto");
const result = document.createElement("div");
result.id = "resultArea";
result.classList.add("flex");
const listArea = document.createElement("div");
listArea.id = "ballList";
const myBallFrame = document.createElement("div");
const resetBtn = document.querySelector(".reset");
const ballList = ["first","second","third","fourth","fifth","sixth","seventh"];
let push = 0;
const text1 = document.createElement("div");
const text2 = document.createElement("div");
const text3 = document.createElement("div");
const money = document.querySelectorAll("#result")[0];
const count =  document.querySelector("input");
const resultButton = document.createElement("button");
resultButton.id = "resultButton";
resultButton.classList.add("font");
resultButton.textContent = "결과 확인하기";

const checkBtn = document.querySelector("#resultButton");
const modal = document.querySelector("#resultModal");
const closeBtn = document.querySelector("#modalClose")

let winningNumbers = [];
let myNumbersList = [];

createNum[1].addEventListener('click', CreateNUM);
createNum[2].addEventListener('click', MyNUM);
count.addEventListener('focus',function(){
  count.value = '';
  count.placeholder = '';
})
count.addEventListener('blur',function(){
  count.placeholder = '구매 수량을 입력해주세요';
})
resultButton.addEventListener('click',function(){
  if(winningNumbers.length === 0 || myNumbersList.length === 0){
    alert("번호 생성과 구매를 모두 완료해야 결과를 확인할 수 있습니다!");
    return;
  }
  showResultModal();
})
closeBtn.addEventListener('click', function(){
  modal.style.display = "none"
});
window.addEventListener('keydown', function(e){
  if(e.key === "Escape") modal.style.display = "none";
});
resetBtn.addEventListener('click', function(){
  alert("로또 페이지를 초기화합니다.");
  console.clear();
  result.style.display = 'none';
  result.innerHTML = '';
  listArea.innerHTML = '';
  push = 0;
  count.value = '';
  money.textContent = '총 금액: 1,000원 (1장당 1,000원)';
  myNumbersList = [];
  resetBtn.style.display = 'none';
})


function CreateNUM(){
  console.clear();
  resetBtn.style.display = "inline-block";
  result.style.display = 'flex';
  if(push == 1||result.childElementCount > 0){
    alert("로또 페이지를 초기화 후 새로운 로또 번호를 추첨합니다.");
    result.innerHTML = '';
    listArea.innerHTML = '';
    push = 0;
    count.value = '';
    money.textContent = '총 금액: 1,000원 (1장당 1,000원)';
    myNumbersList = [];
  }

  if(push == 0){
    const ballFrame = document.createElement("div");
    ballFrame.classList.add("frame","flex");
    winningNumbers = [];
    for (let i=0;i<7;i++){
      const ball = document.createElement("div");
      ball.id = ballList[i];
      ball.classList.add("ball","font","flex");
      let num = Math.floor(1 + (Math.random() * 45));
      for(let j=0;j<winningNumbers.length + 1;j++){
        if(winningNumbers[j] == num) {
          num = Math.floor(1 + (Math.random() * 45));
          j = 0;
        }
      }
      winningNumbers.push(num);
      ball.textContent = num;
      if(i==6){
        const star = document.createElement("img");
        star.src = "./image/star.png"
        star.classList.add("star", "flex");
        ball.append(star);
      }
      ballFrame.appendChild(ball);
    }
    ballFrame.style.height = 38.5;
    text1.textContent = "당첨 결과 확인";
    text1.classList.add("text");
    text2.textContent = "이번 주 당첨 번호";
    text2.classList.add("text");
    text2.id = "result";
    listArea.appendChild(text1);
    listArea.appendChild(text2);
    listArea.appendChild(ballFrame);
    result.appendChild(listArea);
    lotto.appendChild(result);
    push = 1;
  }
}

function MyNUM(){
  console.clear();
  if(push == 1){
    if(isNaN(count.value) == false && Number(count.value) > 0){
      money.textContent = `총 금액: ${count.value},000원 (1장당 1,000원)`;
      MakeBallList();
    } else{
      alert("수량을 입력해주세요");
      count.value = "구매 수량을 입력해주세요";
      money.textContent = "총 금액: 1,000원 (1장당 1,000원)";
    }
  } else {
    alert("로또 번호를 먼저 생성해주세요.");
  }
}

function MakeBallList(){
  myBallFrame.innerHTML = '';
  myNumbersList = [];
  text3.textContent = "내가 구매한 번호";
  text3.classList.add("text");
  text3.id = "result";
  myBallFrame.appendChild(text3);
  for(let nCnt = 0; nCnt<Number(count.value);nCnt++){
    const numbers = [];
    const ballFrame = document.createElement("div");
    ballFrame.classList.add("frame","flex");
    for (let i=0;i<7;i++){
      const ball = document.createElement("div");
      ball.id = ballList[i];
      ball.classList.add("ball","font","flex");
      let num = Math.floor(1 + (Math.random() * 45));
      for(let j=0;j<numbers.length + 1;j++){
        if(numbers[j] == num){
          num = Math.floor(1 + (Math.random() * 45));
          j = 0;
        }
      }
      numbers.push(num);
      ball.textContent = num;
      if(i==6){
        const star = document.createElement("img");
        star.src = "./image/star.png"
        star.classList.add("star", "flex");
        ball.append(star);
      }
      ballFrame.appendChild(ball);
    }
    ballFrame.style.height = 38.5;
    myBallFrame.appendChild(ballFrame);
    listArea.appendChild(myBallFrame);
    result.appendChild(listArea);
    result.appendChild(resultButton);
    lotto.appendChild(result);
    myNumbersList.push(numbers);
  }
}

function showResultModal(){
  modal.style.display = "flex";
  console.clear();
  
  const div3 = document.querySelector("#num3");
  const div4 = document.querySelector("#num4");
  const div5 = document.querySelector("#num5");
  const div5b = document.querySelector("#num5b");
  const div6 = document.querySelector("#num6");
  const total = document.querySelector("#total");
  
  div3.textContent = "n개"
  div4.textContent = "n개"
  div5.textContent = "n개"
  div5b.textContent = "n개"
  div6.textContent = "n개"
  total.textContent = "당신의 당첨금은 총 xxxx원 입니다.";
  
  
  var match3 = 0;
  var match4 = 0;
  var match5 = 0;
  var match5b = 0;
  var match6 = 0;
  var totalprize = 0;
  
  for (let i=0;i<myNumbersList.length;i++){
    let nums = myNumbersList[i];
    let mainNums = winningNumbers.slice(0,6);
    let bonusNum = winningNumbers[6];
    
    let matchCount = 0;
    let hasBonus = false;
    
    let prize = {
      6: 200000000,
      "5b": 15000000,
      5: 150000,
      4: 50000,
      3: 5000,
    };
    
    for (let j=0;j<6;j++){
      if(mainNums.includes(nums[j])){
        matchCount++;
      }
    }

    if(nums.includes(bonusNum)){
      hasBonus = true;
    }

    if(matchCount===6){
      console.log("6번 당첩 = "+(i + 1)+"번째 줄");
      match6++;
      totalprize += prize[6];
    } else if(matchCount === 5&&hasBonus) {
      console.log("5번+보너스 당첩 = "+(i + 1)+"번째 줄");
      match5b++;
      totalprize += prize["5b"];
    } else if(matchCount===5){
      console.log("5번 당첩 = "+(i + 1)+"번째 줄");
      match5++;
      totalprize += prize[5];
    } else if(matchCount===4){
      console.log("4번 당첩 = "+(i + 1)+"번째 줄");
      match4++;
      totalprize += prize[4];
    } else if(matchCount===3){
      console.log("3번 당첩 = "+(i + 1)+"번째 줄");
      match3++;
      totalprize += prize[3];
    }
  }

  div3.textContent = match3 + "개";
  div4.textContent = match4 + "개";
  div5.textContent = match5 + "개";
  div5b.textContent = match5b + "개";
  div6.textContent = match6 + "개";
  total.textContent = "당신의 당첨금은 총 "+ totalprize+"원 입니다.";
}
