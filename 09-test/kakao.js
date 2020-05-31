const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $addbtn = document.querySelector('#add_btn');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 7c42a537b7a3ce28ba33f2cbf81a4246' };
// let pageNum = 1;
let con;

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
// if(con.con.style.display == 'none'){
//     con.style.display = 'block';
//   } else {
//     con.style.display = 'none';
//   }
// }
function read() {
  const { value } = $text;
  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
}

function search() {
  const { value } = $text;
  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }
  read();
  $addbtn.style.display = 'none';
  return true;
}

function morelist() {
  read();
  // let page = document.getElementById('addbtn');
  //     dodisplay();
  //   if (con.style.display == 'none') {
  //     con.style.display = 'block';
  //   } else {
  //     con.style.display = 'none';
  //   }
}

$btn.addEventListener('click', search);
$addbtn.addEventListener('click', morelist);
