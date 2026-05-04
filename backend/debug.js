const d = require('./data.js');
const goa = d.find(x => x.id === 'goa');
console.log('Goa activities length:', goa.activities.length);
console.log('Goa transports length:', (goa.flights?.length || 0) + (goa.trains?.length || 0) + (goa.cars?.length || 0));
console.log('Goa hotels length:', goa.hotels.length);
console.log('Goa food length:', goa.foodOptions.length);
