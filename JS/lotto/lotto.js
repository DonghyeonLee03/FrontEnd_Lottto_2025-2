import { resetBtn, lotto, money, count } from "../ui/elements.js"
import { createChildElements } from "../utils/childElemts.js";

export {CreateNUM, MyNUM, reset, resultBtn, winningNumbers, myNumbersList}

const {result, resultBtn, myBallFrame, listArea, text1, text2, text3 } = createChildElements();
let push = 0;
let winningNumbers = [];
let myNumbersList = [];

function reset() {
  console.clear();
  result.innerHTML = "";
  listArea.innerHTML = "";
  push = 0;
  count.value = "";
  money.textContent = "총 금액: 0원 (1장당 1,000원)";
  myNumbersList = [];
  result.style.display = "none";
  resetBtn.style.display = "none";
}

function createBallFrame(ballCount = 7) {
  const {ballFrame} = createChildElements();
  const numbers = [];

  for (let i=0;i<ballCount;i++){
    const {ball} = createChildElements();
    let num;
    do {
      num = Math.floor(1 + Math.random() * 45);
    } while (numbers.includes(num));
    numbers.push(num);

    ball.id = `ball${i+1}`;
    ball.textContent = num;

    if (i === ballCount - 1){
      const {star} = createChildElements();
      ball.appendChild(star);
    }
    ballFrame.appendChild(ball);
  }
  return {ballFrame, numbers};
}

function CreateNUM() {
  if (push === 1 || result.childElementCount > 0){
    alert("로또 페이지를 초기화 후 새로운 로또 번호를 추첨합니다.");
    reset();
  }

  resetBtn.style.display = "inline-block";
  result.style.display = "flex";

  if (push === 0){
    const {ballFrame, numbers} = createBallFrame();
    winningNumbers = numbers;

    listArea.appendChild(text1);
    listArea.appendChild(text2);
    listArea.appendChild(ballFrame);
    result.appendChild(listArea);
    lotto.appendChild(result);

    push = 1;
  }
}

function MyNUM() {
  console.clear();

  if (push !== 1){
    alert("로또 번호를 먼저 생성해주세요.");
    return;
  }

  const quantity = Number(count.value);
  if (isNaN(quantity) || quantity <= 0){
    alert("수량을 입력해주세요.");
    count.value = "";
    money.textContent = "총 금액: 0원 (1장당 1,000원)";
    return;
  }

  money.textContent = `총 금액: ${quantity},000원 (1장당 1,000원)`;

  myBallFrame.innerHTML = "";
  myNumbersList = [];
  myBallFrame.appendChild(text3);

  const fragment = document.createDocumentFragment();

  for (let i=0;i<quantity;i++){
    const {ballFrame, numbers} = createBallFrame();
    fragment.appendChild(ballFrame);
    myNumbersList.push(numbers);
  }

  myBallFrame.appendChild(fragment);
  listArea.appendChild(myBallFrame);
  result.appendChild(listArea);
  result.appendChild(resultBtn);
  lotto.appendChild(result);
}
