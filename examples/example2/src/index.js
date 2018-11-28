const confup = require('confup');

console.log(confup.get(['database', 'connection']));

console.log(confup.get('database'));
