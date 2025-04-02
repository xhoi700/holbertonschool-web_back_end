/*eslint-disable*/
export default function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved!');
    }, 1000);
  });
}
