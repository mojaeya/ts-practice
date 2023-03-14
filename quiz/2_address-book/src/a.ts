// 타입 추론된다.
// function fetchItems() {
//   let items = ['a', 'b', 'c'];
//   return items;
// }

// let result = fetchItems();
// console.log(result);

// 비동기에서 타입추론 안된다.
function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}

fetchItems();
