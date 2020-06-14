function saveData(data) {
  console.log('todos:', data);
  localStorage.setItem('data', JSON.stringify(data));
}
function loadData() {
  const dataString = localStorage.getItem('data') || '[]';
  return JSON.parse(dataString);
  //   fetch('http://localhost:3000/todos').then((response) => {
  //     response.json().then((data) => {
  //       callback(data);
  //     });
  //   });
}
export { saveData, loadData };
