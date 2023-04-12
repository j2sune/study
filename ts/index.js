"use strict";
// 타입스크립트는 변수 지정 했을 때 타입 쓰지 않아도 타입지정 자동으로 됨
const 이름 = { name: 'kim' };
// ? = 옵션(name 속성이 있을수도 없을수도)
let 이름2 = 123;
let 이름3 = 123;
// 타입 변수로 선언
let 회원들 = ['kim', 'park'];
// 배열에 string 객체만 작성 가능
let 회원목록 = { member1: 'kim', member2: 123 };
// ogject 자료에 타입 지정
function 함수(x) {
    return x * 2;
}
함수(123);
let john = [123, true];
let john2 = { name: 'kim', age: '23' };
class User {
    constructor(name) {
        this.name = name;
    }
}
let song = { sson: '이름', artist: '가수' };
let ttt = { member: ['123', 'ss'], days: 5, started: true };
// ex2 변수로 선언
let tt2 = {
    member2: ['123', 'ss'],
    days2: 5,
    started2: true
};
// 함수에 타입 지정
// 변수 생성하고 아무것도 지정하지 않으면 any 자동 지정
// x? :number = 파라미터가 옵션일 경우 == number | undefined 와 동일 / ogject에도 사용 가능
function 함수타입(x /*x? :number*/) {
    x * 2;
}
함수타입(2); // 함수에 파라미터 타입 지정된 함수는 실행할 때 파라미터 삽입 필수
// 에러나는 이유??
// string + number : 가능, number + number : 가능, 하지만 -> x 는 지금 union 타입이기 때문에 오류 발생
// 조건으로 number 일 때만 연산 하도록 걸어줘야 함 => Type Narrowing
function 함수타입2(x) {
    //console.log(x + 3)
    if (typeof x === 'string') { // Type Narrowing (typeof)
        console.log(x + '3');
    }
    else {
        console.log(x + 3);
    }
}
함수(2);
function 함수narrowing(x) {
    let array = []; // 배열 컨트롤
    if (typeof x === 'number') {
        array[0] = x;
    }
    else { } // if문은 끝까지 작성해야 안전함
    // Narrowing으로 판정해주는 문법들
    // [typeof] 변수
    // 속성명 [in] 오브젝트자료
    // 인스턴스 [instanceof] 부모
}
함수narrowing(123);
function 함수assertion(x) {
    let array = [];
    array[0] = x;
    // assertion 문법 => 왼쪽에 있는 변수를 number로 덮어씀
    // assertion 문법의 용도 
    //    1. Narrowing (타입 변경 X)
    //    2. 무슨 타입이 들어올지 100% 확실할 때 사용
    //    3. 에러나는 이유 모르겠을 때 비상용
}
함수assertion(123);
let 동물 = 123;
let 동물2 = { name: 'kim', age: 20 };
// const 변수는 등호로 재할당만 막는 역할
// const로 담은 object 수정은 자유롭게 가능
const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';
const 여친 = { name: '엠버' };
let position = { x: 10, y: 20 };
// 더 엄격한 타입지정, 자동완성 됨, const 변수 업그레이드 버전
let 이름름;
let 접니다;
function 함수엄격(a) {
    return 1;
}
var 자료 = {
    name: 'kim'
}; // ==> 자료 object 를 만들 때 value 값을 그대로 타입으로 지정해줌 / 혹은 readonly 붙이거나
function 자료함수(a) {
}
자료함수(자료.name); // ==> 값은 'kim' 이지만 타입은 string이라서 오류 남
let 함수AA = function (a) {
    return 10;
};
let 회원정보 = {
    name: 'kim',
    //plusOne : (a2:number) => number;
};
//회원정보.plusOne();
// 연습
let 회원회원 = [1, '2', 3];
let 오브젝트 = { a: 123 };
let 모든타입; // 타입실드 해제 문법
let 모든타입2; // any와 유사하지만 실드 해제되지 않음
let u1 = 'kim';
let a1 = undefined;
let m1 = false;
let 철수 = [u1, a1, m1];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 과목 1개만 가르치는 선생님은 문자로, 2개 이상 가르치는 선생님은 array로 저장
// 과목이 1개일때 그 과목 return, 2개 이상일때는 리스트 마지막 과목 return
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 과목함수(teacher) {
    if (typeof teacher.subject === 'string') {
        console.log('type string : ' + teacher.subject);
    }
    else if (Array.isArray(teacher.subject) === true) {
        console.log('type string[] : ' + teacher.subject[(teacher.subject.length) - 1]);
    }
    else {
        console.log('type 해당없음');
    }
}
과목함수({ subject: 'math' });
과목함수({ subject: ['science', 'art', 'korean'] });
과목함수(영희쌤);
let position2 = { x: 10, y: 20 };
function 가위바위보(game) {
    return ['가위'];
}
let 함수type = function (a) {
    return 10;
};
let 회원정보obj = {
    name: 'kim',
    plusOne: (a) => {
        console.log(a + 1);
        return a + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
회원정보obj.plusOne(3);
회원정보obj.changeName();
let cutZero = function (a) {
    let slslice = a.replace('0', '');
    //console.log(slslice)
    return slslice;
};
let removeDash = function (a) {
    let slslice = parseFloat(a.replace(/-/g, ''));
    //console.log(slslice);
    return slslice;
};
removeDash('010-4585-5352');
cutZero('02');
function cutCallback(aa, bb, cc) {
    let result = bb(aa);
    let result2 = cc(result);
    console.log(result2);
}
cutCallback('010-1234-5678', cutZero, removeDash);
function 결혼가능하냐(x, y, z) {
    let total = 0;
    total += x;
    console.log('total : ' + total);
    if (y == true) {
        total += 500;
    }
    else { }
    if (z == '상') {
        total += 100;
    }
    else { }
    if (total >= 600) {
        console.log('결혼가능 : ' + total);
        return '결혼가능';
    }
    else { }
}
결혼가능하냐(500, true, '중');
function 클리닝함수(x) {
    for (let i = 0; i <= x.length; i++) {
        if (typeof x[i] == 'string') {
            x[i] = Number(x[i]);
        }
        else { }
    }
    console.log(x);
    return x;
}
클리닝함수(['1', 2, '3']);
let cutZero2 = function (a) {
    let slslice = a.replace(/^0+/, '');
    //console.log(slslice)
    return slslice;
};
let removeDash2 = function (a) {
    let slslice = a.replace(/-/g, '');
    return parseInt(slslice);
};
let 만들함수 = function (a, b, c) {
    let afterCut = cutZero(a);
    let afterRemove = removeDash(afterCut);
    return afterRemove;
};
만들함수('010-1111-2022', cutZero2, removeDash2);
console.log(만들함수('010-1111-2022', cutZero2, removeDash2));
class car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
let 차1 = new car('소나타', 5000);
console.log(차1);
console.log(차1.tax());
class Word {
    constructor(...val) {
        this.dNum = [];
        this.dStr = [];
        for (let i = 0; i < val.length; i++) {
            if (typeof val[i] === 'number') {
                this.dNum.push(Number(val[i]));
            }
            else {
                this.dStr.push(String(val[i]));
            }
        }
    }
}
let num1 = new Word('kim', 20, '야', '가', 1550, '사과', '5000');
console.log(num1.dNum);
let 연산 = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};
function maximum(...numbers) {
    let max = 0;
    numbers.forEach(function (a) {
        if (max < a) {
            max = a;
        }
    });
    return max;
}
console.log(maximum(9, 5, 3, 8, 21));
function obj22({ user, comment, admin }) {
    console.log(user, comment, admin);
}
obj22({ user: 'kim', comment: [3, 5, 4], admin: false });
function 파라미터함수([a, b, c, d]) {
    console.log(a, b, c, d);
}
파라미터함수([40, 'wine', false, 6060]);
