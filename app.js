const pdfsig = require('pdfsig');

//const firmas = new pdfsig(`${__dirname}/prueba.pdf`);
const firmas = new pdfsig('prueba.pdf');

const certs = firmas.certToken('/lib/ePass2003_adsib/redist/libcastle.so.1.0.0');
console.log(firmas.firmarToken('/lib/ePass2003_adsib/redist/libcastle.so.1.0.0', '12345678', certs[0].slot, certs[0].id, certs[0].cert));
