const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $btn = document.getElementById('btn');
const $box = document.getElementById('box');

let randomnum = 0;
let boxnum = 0;

function getrandomnum() {
  const min = parseInt($min.value, 10);
  const max = parseInt($max.value, 10);
  randomnum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomnum;
}

$btn.addEventListener('click', () => {
  getrandomnum();
  boxnum = randomnum - 40;

  const timer = setInterval(() => {
    if (randomnum !== boxnum) {
      boxnum += 1;
      $btn.disabled = true;
      $box.innerHTML = boxnum;
    } else {
      $btn.disabled = false;
      clearInterval(timer);
    }
  }, 20);
});
