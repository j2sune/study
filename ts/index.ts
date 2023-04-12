// 타입스크립트는 변수 지정 했을 때 타입 쓰지 않아도 타입지정 자동으로 됨

const 이름 :{ name?:string } = { name:'kim'};
// ? = 옵션(name 속성이 있을수도 없을수도)

let 이름2 :string | number = 123;
// string or number | union type
// union type, unknown 변수는 연산 되지 않음

type 내타입 = string | number;
let 이름3 :내타입 = 123;
// 타입 변수로 선언

let 회원들 :string[] = ['kim', 'park']
// 배열에 string 객체만 작성 가능

let 회원목록 :{member1:string, member2:number} = { member1 : 'kim', member2 : 123}
// ogject 자료에 타입 지정

function 함수(x:number) :number {
    return x * 2;
}
함수(123);
// 파라미터x=number, return값=number

type Member = [number, boolean];
let john:Member = [123, true];
// 첫번째객체는 number, 두번째객체는 boolean

type Member2 = {
    [key:string] : string, // key=모든속성 / 글자로 된 모든 object 속성의 타입=string
}
let john2:Member2 = {name:'kim', age:'23'} 

class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}


// 변수에 자료형 설정하여 담기
type mmm = {[key:string]:string}
let song:mmm = {sson:'이름', artist:'가수'}

// 자료 여러개 타입지정하기
type tt = {
    member:string[],
    days:number,
    started:boolean 
}

let ttt:tt = {member : ['123', 'ss'], days: 5, started: true}

// ex2 변수로 선언
let tt2 :{
    member2:string[],
    days2:number,
    started2:boolean 
} = {
    member2 : ['123', 'ss'], 
    days2: 5, 
    started2: true
}

// 함수에 타입 지정
// 변수 생성하고 아무것도 지정하지 않으면 any 자동 지정
// x? :number = 파라미터가 옵션일 경우 == number | undefined 와 동일 / ogject에도 사용 가능
function 함수타입(x :number /*x? :number*/) :void { // void : return 사용하지 않을 때 사용 , 실수로 return 하는 것을 방지
    x * 2
}

함수타입(2) // 함수에 파라미터 타입 지정된 함수는 실행할 때 파라미터 삽입 필수

// 에러나는 이유??
// string + number : 가능, number + number : 가능, 하지만 -> x 는 지금 union 타입이기 때문에 오류 발생
// 조건으로 number 일 때만 연산 하도록 걸어줘야 함 => Type Narrowing
function 함수타입2(x :number | string) :void {
    //console.log(x + 3)
    if (typeof x === 'string') { // Type Narrowing (typeof)
        console.log(x + '3')
    } else {
        console.log(x + 3)
    }
}
함수(2)

function 함수narrowing(x :number | string) {
    let array :number[] = [];  // 배열 컨트롤
    if (typeof x === 'number') {
        array[0] = x;
    } else {} // if문은 끝까지 작성해야 안전함

    // Narrowing으로 판정해주는 문법들
    // [typeof] 변수
    // 속성명 [in] 오브젝트자료
    // 인스턴스 [instanceof] 부모
}
함수narrowing(123);

function 함수assertion(x :number | string) {
    let array :number[] = [];
    array[0] = x as number; 
    // assertion 문법 => 왼쪽에 있는 변수를 number로 덮어씀
    // assertion 문법의 용도 
    //    1. Narrowing (타입 변경 X)
    //    2. 무슨 타입이 들어올지 100% 확실할 때 사용
    //    3. 에러나는 이유 모르겠을 때 비상용
}
함수assertion(123);

// 타입 변수로 할당, 같은 이름의 type 변수는 재정의 불가능
type Animal = string | number | undefined; 
let 동물 :Animal = 123;

// object 타입 변수에 담기
type Animal2 = {name : string, age : number}
let 동물2 :Animal2 = {name : 'kim', age : 20}

// const 변수는 등호로 재할당만 막는 역할
// const로 담은 object 수정은 자유롭게 가능
const 출생지역 = {region : 'seoul'}
출생지역.region = 'busan'
// => 이를 보완하기 위해 타입스크립트에서는 막을 수 있음
type Gfriend = {readonly name:string} // readonly
const 여친:Gfriend = {name : '엠버'}

// 타입과 타입 합치기
type Name = string;
type Age = number;
type Person = Name | Age;
// object 타입 합치기
type PositionX = {x : number};
type PositionY = {y : number};
type NewPosition = PositionX & PositionY
let position :NewPosition = {x:10, y:20}

// 더 엄격한 타입지정, 자동완성 됨, const 변수 업그레이드 버전
let 이름름 :'kim'
let 접니다 :'커플' | '솔로'

function 함수엄격(a :'hello') :1 | 0{ // 매개변수 타입과, return 타입 지정
    return 1
}

var 자료 = {
    name:'kim'
} as const // ==> 자료 object 를 만들 때 value 값을 그대로 타입으로 지정해줌 / 혹은 readonly 붙이거나
function 자료함수(a:'kim') { // 'kim' 이라는 타입만 들어올 수 있다

}
자료함수(자료.name) // ==> 값은 'kim' 이지만 타입은 string이라서 오류 남

// type alias
type 함수A = (a:string) => number; // == function 함수타입() {} // => return 값

let 함수AA :함수A = function(a) {
    return 10
}

type 함수A2 = (a2:number) => number;

let 회원정보 = { // object 안에 함수 설정 가능
    name : 'kim',
    //plusOne : (a2:number) => number;
}

//회원정보.plusOne();


// 연습

let 회원회원 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{a : string | number} = {a:123}

let 모든타입 :any; // 타입실드 해제 문법
let 모든타입2 :unknown; // any와 유사하지만 실드 해제되지 않음

let u1:string = 'kim';
let a1:undefined | number = undefined;
let m1:boolean = false;
let 철수:(string|number|undefined|boolean)[] = [u1, a1, m1];

let 학교: {
    score:(number | boolean)[],
    teacher:string,
    friend:string[] | string
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John' 
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

// 과목 1개만 가르치는 선생님은 문자로, 2개 이상 가르치는 선생님은 array로 저장
// 과목이 1개일때 그 과목 return, 2개 이상일때는 리스트 마지막 과목 return
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 과목함수(teacher :{subject :string | string[]}) {
    if(typeof teacher.subject === 'string') {
        console.log('type string : ' + teacher.subject);
    } else if(Array.isArray(teacher.subject) === true) {
        console.log('type string[] : ' + teacher.subject[(teacher.subject.length) - 1]);
    } else {
        console.log('type 해당없음');
    }
}

과목함수({ subject : 'math' });
과목함수({ subject : ['science', 'art', 'korean'] });
과목함수(영희쌤);

type Position1 = {1 : number, 2 : string};
type Position2 = {2 : string};
type Position12 = PositionX & PositionY
let position2 :NewPosition = {x:10, y:20}

type tt1 = {color:string , size:number, readonly position:number[]}

type uname = {name:string, phone:number, email:string}
type uname2 = {name:string, phone:number, email:string}
type adult = {age:boolean}
type user = uname2 & adult

function 가위바위보(game :'가위' | '바위' | '보') :('가위' | '바위' | '보')[] {
    return ['가위']
}

type 함수타입 = (a :string /*함수 타입*/) => number;/*리턴값 타입*/ // 함수 타입 지정 

let 함수type :함수타입 = function (a) { // 함수 표현식에만 type alias 사용 가능
    return 10
}

type poType = {
    name : string, 
    plusOne : (a :number) => number,
    changeName : () => void
}

let 회원정보obj:poType = {
    name : 'kim',
    plusOne : (a) => {
        console.log(a + 1)
        return a + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}

회원정보obj.plusOne(3);
회원정보obj.changeName();

type cutFc = (a:string) => string
type rmDash = (a:string) => number

let cutZero :cutFc = function (a) {
    let slslice = a.replace('0', '')
    //console.log(slslice)
    return slslice
}

let removeDash :rmDash = function (a) {
    let slslice = parseFloat(a.replace(/-/g, ''));
    //console.log(slslice);
    return slslice;
}

removeDash('010-4585-5352')
cutZero('02')


function cutCallback(aa:string, bb:cutFc, cc:rmDash) {
    let result = bb(aa)
    let result2 = cc(result)
    console.log(result2)
}

cutCallback('010-1234-5678', cutZero, removeDash)

function 결혼가능하냐(x: number, y: boolean, z: string) :string|void {
	let total :number = 0
    total += x;
    console.log('total : ' + total)

	if (y == true) {
		total += 500
	} else {}
	if (z == '상') {
		total += 100
	} else {}
	
	if (total >= 600) {
        console.log('결혼가능 : ' + total)
		return '결혼가능'
	} else {}
}

결혼가능하냐(500, true, '중')

function 클리닝함수(x:(string|number)[]) {
	for (let i = 0; i <= x.length; i++) {
        if (typeof x[i] == 'string') {
            x[i] = Number(x[i])
        } else {}
    }
    console.log(x)
    return x
}

클리닝함수(['1',2,'3'])

type cz = (a:string) => string
type rd = (a:string) => number 

let cutZero2 :cz = function(a) {
	let slslice = a.replace(/^0+/, '')
    //console.log(slslice)
    return slslice
}

let removeDash2 :rd = function(a) {
	let slslice = a.replace(/-/g, '')
	return parseInt(slslice)
}

let 만들함수 = function(a:string, b:cz, c:rd) { // 각각 함수에 할당한 type alias를 타입으로 선언
	let afterCut = cutZero(a)
	let afterRemove = removeDash(afterCut)
    return afterRemove
}

만들함수('010-1111-2022', cutZero2, removeDash2)
console.log(만들함수('010-1111-2022', cutZero2, removeDash2))

class car {
	model :string;
	price :number;
	constructor(model:string, price:number) {
		this.model = model
		this.price = price
	}
	tax() :number {
		return this.price / 10
	}
}

let 차1 = new car('소나타', 5000)
console.log(차1)
console.log(차1.tax())

class Word {
    dNum :number[];
    dStr :string[];
    constructor(...val:(string | number)[]) {
        this.dNum = [];
        this.dStr = [];

        for(let i = 0; i < val.length; i++) {
            if (typeof val[i] === 'number') {
                this.dNum.push(Number(val[i]))
            } else {
                this.dStr.push(String(val[i]))
            }
        }
    }
}

let num1 = new Word('kim', 20, '야', '가', 1550, '사과', '5000')
console.log(num1.dNum)

interface 연산하셈 { plus:(a:number, b:number) => number, minus:(a:number, b:number) => number }
let 연산 : 연산하셈 = {
    plus(a, b) {
        return a + b
    }, 
    minus(a, b) {
        return a - b
    }
}

function maximum(...numbers:number[]) :number {
    let max = 0;
    numbers.forEach(function(a:number) {
        if(max < a) {
            max = a
        }
    })
    return max
}

console.log(maximum(9,5,3,8,21))

type type2222 = {
    user:string,
    comment:number[],
    admin:boolean
}

function obj22({user, comment, admin}:type2222) {
    console.log(user, comment, admin);
}

obj22({user : 'kim', comment : [3,5,4], admin : false})

type arraytype = (number | string | boolean)[]

function 파라미터함수([a,b,c,d]:arraytype) {
    console.log(a,b,c,d)
}

파라미터함수( [40, 'wine', false, 6060] )