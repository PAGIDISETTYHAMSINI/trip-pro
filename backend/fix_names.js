const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataPath, 'utf-8');

// The new places have names like: name: "Ajanta, Aurangabad",
// We want to change it to: name: "Ajanta, Aurangabad, India",
// We can use regex to replace name: "...", with name: "..., India",
// but only if it doesn't already end in "India", "France", "Indonesia", "Japan", "USA".

content = content.replace(/name:\s*"([^"]+)"/g, (match, p1) => {
  if (p1.endsWith('India') || p1.endsWith('France') || p1.endsWith('Indonesia') || p1.endsWith('Japan') || p1.endsWith('USA')) {
    return match; // Keep as is
  } else {
    return `name: "${p1}, India"`;
  }
});

fs.writeFileSync(dataPath, content);
console.log("Fixed names in data.js to include ', India'");
