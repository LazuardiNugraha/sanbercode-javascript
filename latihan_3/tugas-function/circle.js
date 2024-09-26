function calculateCircelArea(radius) {
  if (radius <= 0) {
    return "Jari - jari harus bernilai positif";
  }
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

const radius = 5;
const area = calculateCircelArea(radius);
console.log(`Luas lingkaran dengan jari - jari ${radius} adalah ${area}`);