// 인터페이스 
interface Developer2 {
  name: string;
  skill: string;
}

// interface Person2 {
//   name: string;
// }

class Person2 {
  name: string;
  skill: string
}

var developer2: Developer2;
var person2: Person2;

// developer = person;
// person2 = developer2; -> 에러가 왜 뜨지
developer2 = new Person2();


// 함수
var add = function (a:number) {
  //...
}

var sum = function (a: number, b: number) {
  // return a + b;
}

sum = add;
// add = sum;

// 재네릭

interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>
notempty1 = notempty2
notempty2 = notempty1;