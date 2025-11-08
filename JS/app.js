import { createBtn, buyBtn, resetBtn, closeBtn, modal, count } from "./ui/elements.js"
import { CreateNUM, MyNUM, reset, resultBtn } from "./lotto/lotto.js";
import { showResultModal } from "./lotto/modal.js";

createBtn.addEventListener('click', CreateNUM);
buyBtn.addEventListener('click', MyNUM);
resetBtn.addEventListener('click', function(){
  alert("로또 페이지를 초기화합니다.");
  reset();
});
resultBtn.addEventListener('click', showResultModal);
closeBtn.addEventListener('click', function(){
  modal.style.display = "none";
})
window.addEventListener('keydown', function(e){
  if(e.key === "Escape")  modal.style.display = "none";
})
count.addEventListener('focus',function(){
  count.value = "";
  count.placeholder = "";
})
count.addEventListener('blur', function(){
  count.placeholder = "구매 수량을 입력해주세요";
})
