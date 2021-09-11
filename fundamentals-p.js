let num = 23;
num = 44;

const myName = 'Samiul Ahmed';

if(num === 44 && myName === 'samiul ahmed'){
    // console.log('Right ');
}else{
    // console.log('Wrong');
}

const numbers = [12,26,55,23,57,21,74];
const numbersLength = numbers.length;

numbers.push(55);
numbers[1] = 32;
const secondELement = numbers.indexOf(55);

 if(numbers.includes(3000)){
    //  console.log('FIND');
 }else{
    //  console.log('NOT HERE')
 }

 for(let i = 0 ; i < numbers.length ; i++){
    //  console.log(numbers[i]);
 }

// const totalElement = numbers.map(n => console.log(n))
const findEle = numbers.filter(n =>  n < 50);
const firstEle = numbers.find(n => n > 60);
//  console.log(firstEle);

// console.log(secondELement);

let x = 0
while(x<=20){
    // console.log(x);
    x++;
}