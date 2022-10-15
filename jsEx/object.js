const person = {
    name : ['미미', '안유진'],
    age: 20,
    gender: 'feamil'.replace,
    interest: ['music','movie'],
    hello: function(){
        console.log('hello');
    },
    greeting: function(){
        console.log('Greeting bro');
    },
    hobby:{
        name: "programer",
        alert: function(){
            alert('Coding')
        }
    }

}

console.log(person.name[0]);
console.log(person.hobby.name);
person.hobby.name = "changed";
console.log(person.hobby);

//구조 분해 할당
let arr = ['a', 'b']
let [name, sur] = arr;
console.log(name);

let [name1, name2, ...rest] = ['j','d','e','f','e','h','c']
console.log(rest);