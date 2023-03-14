// // js 문자열 선언
// var str = "hello";

// ts 문자열 선언
let str: string = "hello";

// ts 숫자
// let num: number = 10;

// ts 배열
let arr: Array<number> = [1, 2, 3];
// let heroes: Array<string> = ["Capt", "Thor", "Hulk", 10];
let items: number[] = [1, 2, 3];

// ts 튜플
// 튜플 : 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미
let address: [string, number] = ["gangnam", 100];

// ts 객체
let obj: object = {};
// object로 객체로 인정되나, 속성에 어떤 값이 들어가도 가능한 상태
// let person: object = {
//   name: "capt",
//   age: 100,
// };
// 객체 속성에 타입을 설정
let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

// ts 진위값
let show: boolean = true;
