const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $addbtn = document.querySelectorAll('#add_btn');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 7c42a537b7a3ce28ba33f2cbf81a4246' };

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
}
function error() {
  // eslint-disable-next-line no-alert
  alert('데이터를 가져올수 없습니다');
}
function search() {
  const { value } = $text;
  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }
  getsearch();

  

  return true;
}
function getsearch(){
  fetch(`${url}?query=${value}`, { headers })
  .then((res) => res.json())
  .then(success)
  .catch(error);
}
function dodisplay(){
  var con = document.getElementById("addbtn");
  if(con.style.display=='none'){
    con.style.display = 'block';
  }else{
    con.style.display = 'none';
  }
}
//$addtn.style.display = 'inline-block';

$btn.addEventListener('click', search);
$addbtn.addEventListener('click',getsearch);
  //this.parentNode.getElementsByTagName('div')[0].style.display != ''){this.parentNode.getElementsByTagName('div')[0].style.display = '';this.value = '숨기기';}else{this.parentNode.getElementsByTagName('div')[0].style.display = 'none'; this.value

 )
