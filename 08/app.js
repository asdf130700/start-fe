// const promise = fetch('./json.json');
// console.log(promise);

// promise.then((res) => {
//   console.log('res', res);
//   const textPromise = res.json();
//   console.log('textPromise', textPromise);

//   textPromise.then((data) => console.log('data', data)); //데이터를 fetching 해서 가져옴
// });

// // const obj = {
// //     a:1,
// // }

function callback(data) {
  console.log('callback:', data);
}
