var name = 'pranjal soni';
const states_in_us = "50";
var add = 5 + 4;
//hello this is a comment
function sayHello() {
    alert('Hello, world');
}
function checkAge(name, age) {
    if (age < 21) {
        alert("sorry " + name + ", you aren't old enough to view this page!")
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('james', 17);
checkAge('john', 17);

let vegetables = ['ladyfinger', 'onion', 'potato', 'zomato'];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);

}

let names = ['Teddy', 'John', 'Mike', 'George']; // we can imagine this was initialized elsewhere

for (let i = 0; i < names.length; ++i) {

    console.log(names[i]);

    if (names[i] === 'John') {
        console.log('We found John!'); // and we DONT want to continue searching through the array
        break;
    }
}

var fiveobjects = [
    {
        name: 'person1',
        age: 20
    },
    {
        name: 'person2',
        age: 19
    }
    , {
        name: 'person3',
        age: 18
    },
    {
        name: 'person4',
        age: 22
    }
    , {
        name: 'person5',
        age: 23
    }
];

alert(fiveobjects.length);


for(var i=0; i<fiveobjects.length; i++){
    checkAge(fiveobjects[i].name, fiveobjects[i].age);
}

var anystr = ''; 

function getlength(anystr){
     return (anystr.length);

}

let no = console.log(getlength('Hello World'));

if(no%2 == 0){
    console.log('The world is nice and even!');
}
else{
    console.log('The world is an odd place!');
}