

const person ={
    name:'제니',
    age:25,
    team: '블핑'
}


function printPerson({name,age,team}) {
    console.log(`${name} ${age} ${team}`);
}

printPerson(person);

// function CreatePerson(name,age,team) { 
//         this.name=name,
//         this.age=age,
//         this.team=team
// }

class CreatePerson{ 
    constructor(name,age,team){
        this.name=name,
        this.age=age,
        this.team=team
    }
}

const person1 = new CreatePerson('미미', 30, '오마이갓걸')
const person2 = new CreatePerson('제니', 25, '블핑')
const person3 = new CreatePerson('안유진', 23, '아이브')

printPerson(person1)


function sum(...arg){
    for (const key of arg) {
        console.log(key);
    }
}
let arr = [1,2,3,4,5,6,7];
console.log(sum(1,2,34));

//깊은 복사
let user = {
    name:"john",
    age: 30
}

let clone ={};
// for (const key of user) {
//     clone[key] = user[key]
// }

let clone2 = Object.assign({},user)

Object.assign(clone,user)
console.log(clone.name);
console.log(clone2.name);