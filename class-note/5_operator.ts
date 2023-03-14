// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// 유니온 타입
// let seho: string | number | boolean;
function logMessage(value: string | number) {
  // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
  if (typeof value === 'number') {
    // 유니온 타입의 장점: 아래 value에 number 타입으로 추론
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number')
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   // 유니온 타입이기 떄문에 모든 속성이 뜰 것 같지만 공통 속성만 뜸
//   // someone.name;
// //   someone.skill;
// //   someone.age;
// }

// askSomeone({name: '디벨로퍼', skill: '웹개발'})
// askSomeone({name:'캡틴', age: 100})

// 인터섹션 타입  = &
function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone({name: '디벨로퍼', skill: '웹개발', age: 34})
// askSomeone({name:'캡틴', age: 100})

// let seho: string | number | boolean;
// let capt: string & number & boolean;
