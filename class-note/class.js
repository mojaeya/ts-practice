function Person(name, age) {
  this.name = name;
  this.age = age;
}

let capt = new Person('캡틴', 100)

// ==

class Person {
  // 클래스 로직 
  constructor(name, age) {
    console.log('생성 되었습니다.')
    this.name = name;
    this.age = age;
  }
}

let seho = new Person('새호', 30); // 생성 되었습니다.
console.log(seho)

