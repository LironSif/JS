// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift('Greg')

// people.pop('James')

// people.unshift('Matt')

// people.push('Liron')
// ..............................

// const people = ["Matt","Greg", "Mary", "Devon", "James"];
// people.splice(2, 1);
// people.splice(0, 1);
// console.log(people)
// ................................
// const people = ["Matt","Greg", "Mary", "Devon", "James"];
// const index = people.indexOf('Mary');
// console.log(index)
// .....................
// const people = ["Matt","Greg", "Mary", "Devon", "James"];
// const index = people.indexOf('Foo');
// console.log(index) 
// results in -1 because its falsey clame
// ...................................
const people = [,"Greg", "Mary", "Devon", "James"];
people.splice(3, 1, "Elizabeth" , "Artie");
const bob = [,"Bob"];
const withBob = people.concat(bob)
console.log(withBob)


