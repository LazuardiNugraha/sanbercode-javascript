function varExample() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log("Nilai x di dalam blok (var)", x);
  }
  console.log("Nilai x di luar blok (var):", x);
}

function letExample() {
  let y = 10;
  if (true) {
    let y = 20;
    console.log("Nilai y di dalam blok (let):", y);
  }
  console.log("Nilai y di luar blok (let):", y);
}

function constExample() {
  const z = 10;
  console.log("Nilai z (const):", z);

  const obj = { name: "Alzuga" };
  obj.name = "Updated Alzuga";
  console.log("Nilai objek z (const) setelah update:", obj);
}

varExample();
letExample();
constExample();