const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 7c42a537b7a3ce28ba33f2cbf81a4246' };

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a herf = "${doc.url}" target = "_blank">${doc.contents}</a></li>`;
  });
  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
  //   result.json().then((data) => {
  //   console.log(data);
}
function error() {
  // eslint-disable-next-line no-alert
  alert('테이터를 가져올수 없습니다.');
}

function search() {
  const { value } = $text;
  if ($text.value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }

  fetch(`${url}?query = ${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
  return true;
}

$btn.addEventListener('click', search);
