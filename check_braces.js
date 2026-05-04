const fs = require('fs');
const content = fs.readFileSync('frontend/src/pages/TripBuilder.jsx', 'utf8');

let openBraces = 0;
let openParens = 0;
let openDivs = 0;

const divs = content.match(/<div/g) || [];
const closedDivs = content.match(/<\/div>/g) || [];

console.log('Braces:', openBraces);
console.log('Divs:', divs.length);
console.log('Closed Divs:', closedDivs.length);
console.log('Balance:', divs.length - closedDivs.length);

// Count braces properly
for (let i = 0; i < content.length; i++) {
  if (content[i] === '{') openBraces++;
  if (content[i] === '}') openBraces--;
}
console.log('Braces Balance:', openBraces);
