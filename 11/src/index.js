import { render } from './html-render';
import formInput from './form-input';
import { loadData } from './data-manager';

import './todos.css';

// const $inputForm = document.querySelector('#input-form');
// const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

// const todoModel = {
//   id: '',
//   text: '',
//   isDone: false,
// };

const todos = loadData();

$result.addEventListener('click', (event) => {
  const { className } = event.target;
  if (className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});

formInput.init(todos);
render(todos);
// console.log($inputForm);
// $inputForm.addEventListener('submit', (event) => {
//   // console.log(event);
//   event.preventDefault();
//   // form이 넘어가지 않도록함

//   const text = $input.value;
//   //   console.log(text);
//   $input.value = '';
// });
// function render(data){
// const html = data.map((todo, index) => {
//   return `<li>
//     <button class="delete">×</button>
//     <input type="checkbox" class="toggle-checked" ${
//       todo.isDone ? 'checked' : ''
//     }/>
//     <span class="text">${todo.text}</span>
//   </li>`;
// });

// // eslint-disable-next-line no-undef
// $result.innerHTML = `<ul>${html.join('')}</ul>`;
// }
