
const person ={
    name:'제니',
    age:25,
    team: '블핑'
}

const  create = function({person}){
    console.log(`${person.name}`);
}

create({person});

