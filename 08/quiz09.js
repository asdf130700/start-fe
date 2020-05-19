const $url = document.getElementById('url');
const $btn = document.getElementById('btn');
const $log = document.getElementById('log');

function printlog(str) {
  $log.value = str;
}
function getsource(result) {
  result.text().then(printlog);
}
function geterror(error) {
  printlog(error);
}

function fetchurl() {
  const url = $url.value;
  printlog('');

  if (!url) {
    // eslint-disable-next-line no-alert
    alert('url를 입력하세요');
  } else {
    fetch(url).then(getsource).catch(geterror);
  }
}

$btn.addEventListener('click', fetchurl);
$url.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    fetchurl();
  }
});
