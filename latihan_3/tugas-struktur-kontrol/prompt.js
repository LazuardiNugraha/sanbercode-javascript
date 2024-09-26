const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan sebuah angka: ', (input) => {
  let angka = parseInt(input);

  if (isNaN(angka)) {
    console.log("Input bukan angka yang valid!");
  } else {
    if (angka % 2 === 0) {
      console.log(angka + " adalah angka genap.");
    } else {
      console.log(angka + " adalah angka ganjil.");
    }
  }

  readline.close();
});