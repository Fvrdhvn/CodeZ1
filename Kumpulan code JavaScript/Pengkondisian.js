//Pengkondisian Javascript
// if , else
var lampu = "merah";
if(lampu == "merah") {
  console.log("Berhenti!");
} else if (lampu == "kuning") {
  console.log("Hati-hati!");
} else if (lampu == "hijau") {
  console.log("Jalan");
} else {
  console.log("Tabrakkk!!!");
}

// Else if
var jam = 18

if(jam < 12) {
  console.log("Selamat Pagi!");
} else if (jam >= 12 ) {
  console.log("Selmat siang!");
} else if (jam >= 18 ) {
  console.log("Selamat malam!");
} else if (jam > 24) {
  console.log("selamat anda melawan waktu!")
}

// Switch 
var lampu = "kuning" 
  switch(lampu) {
      case "merah":
          console.log('lampu warna merah');
          break;
      case "hijau":
          console.log('lampu berwarna hijau');
          break;
      case "kuning":
          console.log('lampu warna kuning');
          break;
      default:
          console.log('gak ada lampu warna itu cik');
          break;        
  }