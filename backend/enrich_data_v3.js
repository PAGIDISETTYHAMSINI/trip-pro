const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let destinations = require(dataPath);

destinations = destinations.map(dest => {
  let lang = 'en';
  let etiquette = "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).";
  let emergency = "Local Emergency: 911";

  if (dest.name.includes('India')) {
    lang = 'hi';
    etiquette = "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.";
    emergency = "Police: 100 | Ambulance: 102 | Emergency: 112";
  } else if (dest.name.includes('France')) {
    lang = 'fr';
    etiquette = "Always say 'Bonjour' when entering a shop. Service is included in bills, but a small tip for exceptional service is polite.";
    emergency = "Emergency: 112 | Police: 17 | Ambulance: 15";
  } else if (dest.name.includes('Japan')) {
    lang = 'ja';
    etiquette = "Do NOT tip; it can be considered rude. Bowing is the standard greeting. Keep quiet on public transport.";
    emergency = "Police: 110 | Ambulance/Fire: 119";
  } else if (dest.name.includes('Indonesia')) {
    lang = 'id';
    etiquette = "Dress modestly. Never point with your index finger; use your thumb instead. Remove shoes before entering homes.";
    emergency = "Police: 110 | Ambulance: 118";
  } else if (dest.name.includes('USA')) {
    lang = 'en';
    etiquette = "Tipping is practically mandatory for services (15-20% at restaurants). Personal space is highly valued.";
    emergency = "Emergency: 911";
  }

  return {
    ...dest,
    language: lang,
    culturalEtiquette: etiquette,
    emergencyContacts: emergency
  };
});

const fileContent = `const destinations = ${JSON.stringify(destinations, null, 2)};\n\nmodule.exports = destinations;\n`;
fs.writeFileSync(dataPath, fileContent);
console.log("data.js successfully enriched with survival info.");
