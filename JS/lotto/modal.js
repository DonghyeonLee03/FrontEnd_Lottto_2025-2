import { modal, div3, div4, div5, div5b, div6, total } from "../ui/elements.js";
import { winningNumbers, myNumbersList } from "./lotto.js";
export {showResultModal}

let prize = {
  6: 200000000,
  "5b": 15000000,
  5: 150000,
  4: 50000,
  3: 5000,
};

function showResultModal(){
  modal.style.display = "flex";
  console.clear();
  
  let match3 = 0;
  let match4 = 0;
  let match5 = 0;
  let match5b = 0;
  let match6 = 0;
  let totalprize = 0;
  
  for (let i=0;i<myNumbersList.length;i++){
    let nums = myNumbersList[i];
    let mainNums = winningNumbers.slice(0,6);
    let bonusNum = winningNumbers[6];
    
    let matchCount = 0;
    let hasBonus = false;
    
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
