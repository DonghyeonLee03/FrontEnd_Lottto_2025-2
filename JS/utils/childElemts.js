export{createChildElements}

function createChildElements() {
  const result = document.createElement("div");
  const listArea = document.createElement("div");
  const myBallFrame = document.createElement("div");
  const text1 = document.createElement("div");
  const text2 = document.createElement("div");
  const text3 = document.createElement("div");
  const resultBtn = document.createElement("button");
  const ballFrame = document.createElement("div");
  const ball = document.createElement("div");
  const star = document.createElement("img");
  
  result.id = "resultArea";
  result.classList.add("flex");
  
  listArea.id = "ballList";
  
  resultBtn.id = "resultButton";
  resultBtn.classList.add("font");
  resultBtn.textContent = "결과 확인하기";
  
  text1.textContent = "당첨 결과 확인";
  text1.classList.add("text");
  
  text2.textContent = "이번 주 당첨 번호";
  text2.classList.add("text");
  text2.id = "result";

  text3.textContent = "내가 구매한 번호";
  text3.classList.add("text");
  text3.id = "result";
  
  ballFrame.classList.add("frame","flex");
  ballFrame.style.height = 38.5;
  
  ball.classList.add("ball","font","flex");
  
  star.src = "./image/star.png"
  star.classList.add("star", "flex");

  return {result, listArea, myBallFrame, text1, text2, text3, resultBtn, ballFrame, ball, star};
}
