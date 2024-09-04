'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
order:function(main,start){
  return [this.starterMenu[main],this.starterMenu[start]];
},
// as per ES6 fun can write like below
orderDelivery({start,end,time="20:00"}){
console.log(`you ordered ${this.starterMenu[start]} and ${this.mainMenu[end]} at ${time}`)
},
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
 
};

// //obj destruction
// // 
// const arr=[1,2,3];
// const newarr=[...arr,4,5];
// //joining array
// const copyarr=[...arr,...newarr];
// console.log(copyarr);
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);
// //itreables:arrya,sring,maps,sets . but NOT object
// const s="happy birthday";
// const letter=[...s,'t','o'];
// console.log(letter);
// //spread in obj
// const newrrstorent={
//   name:'macd',
// ...restaurant,
// menu:restaurant.categories
// }
// newrrstorent.name='zutopia';
// console.log(newrrstorent);

// const pasta=function(...ing){
//   console.log(ing[0],ing[1],ing[2]);
// }
// const ing=[1,2,3];
// pasta(...ing);
// //rest :means give rest of values in array
// const a=[1,2,3,4,5,6];
// const [c,b, ,...other]=a;
// console.log("others"+c,b,other);

// const add=function(a,...numbers){
//   console.log(a);
//   console.log(numbers);
// }
// add(2,3);
// add(5,6,8,4,2,3,7);

// //short-circuiting
// //or :if all the values are falsy then it will disply the last value ,OTHERWISE IT WILL DISPLY THE FIRST TRUTHY VALUE AND DON'T EXECUTE ANY OTHER 
// console.log(1||2);
//   console.log(0||'');
//   console.log(false||0);
//   //&&:if all the value are true than it will display the last element otherwise it will disply the first falsy value
//   console.log(true&&2);
//   console.log(''&&1) ;

//   //nulish oprator:??
//   restaurant.oredernum=10;
//   console.log(restaurant.oredernum);
//   restaurant.oredernum=0;
//   console.log(restaurant.oredernum||10);
//   console.log(restaurant.oredernum??10);//nullish opreator will give all not nul values means it dont see truthy bor falsy values so it consider:null,undefine as NULL

//   //FOR ..OF LOOP
//   const p=[2,5,'hii',true];
//   for(const i of p){
//     console.log("item of arry:"+i);  }

//   //for use index in for..of
//   for (const [i,el] of p.entries()){
//     console.log("i"+i);
//     console.log(el);
//   }
//   const rest1={  
//     shopname:"la pinnoz",
//     numguest:0}
  
//     const rest2={  
//       owner:"dsjhbja",
//       shopname:"la pinnoz",
//       num:1}
// rest1.numguest=rest1.numguest||10;
// rest2.numguest=rest2.numguest||10;//this can also write like beleow
// rest1.numguest||=10;
// rest2.numguest||=10;//if you dont want repllace 0 by any  num than do as bleow
// rest1.numguest??=10;
// rest2.numguest??=10;
// rest1.owner&&="dsfa";
// rest2.owner&&="herry";
// console.log(rest1);
// console.log(rest2)

//coding challange 1🚀
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const[player1,player2]=[...game.players]
// // player1Final=['thiago','countinho','perisic',...player1];
// // const allPlayers=[...player1,...player2]
// const[gk,...fieldplayer1]=player1; 
// console.log(fieldplayer1);
// console.log(gk);
// const allPlayers=[...player1,...player2];
// console.log(allPlayers);
// const players1Final=['Thiago', 'Coutinho' , 'Perisic',...player1];
// const {odds:
//   {team1,x:draw,team2}
// }=game;
// console.log(team1,draw,team2);
// const printGoals=function(...num){
//     console.log(num);
//     console.log(num.length);

// }

// printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich');
// printGoals(game.scored);

// team1>team2&&console.log("team1 wins");
// team2>team1&&console.log("team2 wins");


// //optional chaining :it is used to watch weather a funtion,object,array is null or not
// const obj={
//   n:"sjhf",
//   a:52
// }
//  const days=['sun','mon','tues','wed','thur','fri','sat'];
//  console.log("-------------");
//  for(let day of days){

//   console.log(restaurant.openingHours[day]?.open??"closed")
//  }
//  const a=[];
// console.log(a?.name??"not exits");
// console.log(restaurant.openRes?.day);
// const key=Object.keys(openingHours);
// console.log(key);
// const entries=Object.entries(openingHours);
// console.log(entries);
// for(let [key,{open,close}] of entries){
//   console.log(`on ${key} we will open for ${open}`);
  
// }

//coding challange 2🚀
// for(let [i,el] of game.scored.entries()){
//   console.log(`${i+1}: ${el}`);
// }
// let entry=Object.values(game.odds);
// let avg=0;
// for(let i of entry){
// avg+=Number(i);
// }
// avg=avg/entry.length;
// console.log(avg);
// for(let [key,val] of Object.entries(game.odds)){
//   console.log(`odd of victory ${key}: ${val}`);
// }
// let scores={};
// let goal=[2,1,1];
// [scores.Lewandowski,scores.Gnarby,scores.Hummels]=goal;
// console.log(scores); 

// //sets
// const a=new Set([1,'jit','hey',1,'1']);
// console.log(a);
// a.add('om');
// a.has(1);
// a.delete('1');
// const b=[...new Set(a)];
// console.log(b)
// console.log(new Set(a).size);
// console.log(new Set("fsfsfsffsfadstt").size);

// //map
// const rest =new Map();
// rest.set('name','om');

// rest.set('categories',['gujrati','marathi','panjabi']);
// console.log(rest);
// const arr=[1,2];
// rest.set('arr','hiii');
// console.log(rest.size);
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question.get('question'));
// for(let [key,val]of question){
//   if(typeof key==='number'){
//     console.log(`answer ${key}: ${val}`);
//   }
// }

// const ans=Number(prompt("enter optio num:"));
// console.log(question.get(ans===question.get('correct')));
// //create array from map
// console.log([...question]);
// console.log([...question.keys()]);


//coding challange 3 🚀
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// const evets=new Set(gameEvents.values());
// gameEvents.delete(64);
// console.log(evets);
// console.log(gameEvents);
// for(let[key1,val1] of gameEvents){
//   if(key1<45){
//     console.log(`[FIRST HALF] ${key1}: ${val1}`);
//   }
//   else{
//     console.log(`[second half] ${key1}: ${val1}`)
//   }
  
// }

// //string methods
// const airline = 'TAP Air Portugal';
// console.log(airline[0]);
// console
// .log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('P'));
// console.log(airline.slice(4));
// console.log(airline.slice(1,-1));
// let e;
// const seat=function(n){
//  e=n.slice(n.length-1);
// e==='B' || e==="E"? 
//   console.log("you got middle seat"):
//   console.log("you are lucky");

// }
// seat('11B');
// seat('23E');
// seat('32p');

// let fname='jOnAs'//Jonas
// let name=fname.toLowerCase();
// let fn=name[0].toUpperCase()+name.slice(1);
// console.log(fn);

// const email='hello1@gmail.com'
// const useremail='Hello@Gamil.Com';
// useremail.toLowerCase();

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// const maskcredit=function(n1){
//   let lastnum=n1.slice(-4);
//  return lastnum.padStart(n1.length,"*");
// }
// console.log(maskcredit('12144654666'));
//coding challange4 🚀
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

