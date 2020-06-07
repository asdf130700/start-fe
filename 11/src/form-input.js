import todoModel from './todo-model';
import { render } from './html-render';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

// const todoModel = {
//     id: '',
//     text: '',
//     isDone: false,
// };

function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    // console.log(event);
    event.preventDefault();
    // form이 넘어가지 않도록함

    const text = $input.value;
    if (!text) return;
    //   console.log(text);
    $input.value = '';

    data.push({
      //   Object.assign(todoModel
      ...todoModel,
      text,
      isDone: false,
    });

    render(data);
  });
}

export default {
  init,
};
