const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Terjadi kesalahan saat membaca file:', err);
    return;
  }

  console.log(data);
})