function getDayName(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Senin";
      break;

    case 2:
      dayName = "Selasa";
      break;

    case 3:
      dayName = "Rabu";
      break;

    case 4:
      dayName = "Kamis";
      break;

    case 5:
      dayName = "Jumat";
      break;

    case 6:
      dayName = "Sabtu";
      break;

    case 7:
      dayName = "Minggu";
      break;

    default:
      dayName = "Nomor hari tidak valid. Masukkan angka antara 1 sampai 7.";
  }

  return dayName;
}

const inputDay = 3;
console.log(`Hari ke-${inputDay}: ${getDayName(inputDay)}`);