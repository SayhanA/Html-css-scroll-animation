let butterfly = "As the butterfly fluttered through the garden, another butterfly joined, making it a duo, and soon, a colorful butterfly trio emerged, creating a mesmerizing dance of butterflies.";

let flower = "The flower shop displayed a beautiful flower arrangement featuring various flower types, each blossom showcasing unique flower colors, making it a vibrant celebration of the flower's natural beauty.";

// console.log(butterfly.replaceAll("butterfly", '_____'))
// console.log(butterfly.substring(0, 26))
// let newText = butterfly.replace(/butterflY/i, "W3Schools");
// console.log(newText)

const indexOfMe = flower.indexOf('op');
console.log("method: indexOf", indexOfMe);

const lastIndexOfMe = flower.lastIndexOf('op');
console.log("method: lastIndexOf", lastIndexOfMe);

const searchMe = flower.search('op');
console.log("method: search", searchMe);

const matchMe = flower.match('op');
console.log("method: match", matchMe);

const includesMe = flower.includes('op');
console.log("method: includes", includesMe);

const startWithME = flower.startsWith('The');
console.log('method: startsWith', startWithME);

const startWithMe2 = butterfly.startsWith('the', 3);
console.log("method: startWith", startWithMe2);

const endsWithMe = flower.endsWith('beauty.');
console.log("method: endsWith", endsWithMe);

const endsWithMe2 = butterfly.endsWith('the', 6);
console.log("method: endsWith", endsWithMe2);

const x = 0xB;
console.log(x);