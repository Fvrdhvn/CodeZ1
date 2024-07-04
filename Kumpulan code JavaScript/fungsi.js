// Aturan Membuat Fungsi :
// Fungsi JavaScript didefinisikan dengan keyword "function", lalu diikuti oleh nama fungsi, lalu diikuti oleh tanda kurung ().
// Nama fungsi dapat berisi huruf, angka, underscore (_), dan tanda dolar (aturan yang sama dengan variabel).
// Tanda kurung termasuk nama parameter dipisahkan oleh koma, contohnya seperti (parameter1, parameter2, ...)
// Kode yang akan dieksekusi ditempatkan di dalam kurung kurawal: {}

// Fungsi dengan "return"
// Fungsi JavaScript dapat ditambahkan dengan statement "return" untuk mengembalikan data.

function kalikanAngka(a, b) {
  return a * b; //Function mengembalikan hasil kali antara a dan b
}
// Sebuah fungsi JavaScript akan selalu mengembalikan "return" meskipun kita tidak menentukan isi dari return tersebut.

function kalikanAngka(angka1, angka2) {
  return angka1 * angka2;
} // contoh statement function

document.getElementById("data").innerHTML = kalikanAngka(5, 20); // jika ingin menampilkan di html seperti ini

// Variable lokal pada fungsi
// contoh :

fungsiMobil();
function fungsiMobil() {
  var namaMobil = "Avanza";
  document.getElementById("data").innerHTML =
    "Pemanggilan di dalam fungsi " + namaMobil;
}
document.getElementById("data2").innerHTML =
  "Pemanggilan di luar fungsi " + namaMobil;

// Outputnya ketika kita gunakan namaMobil di dalam fungsi maka akan tercetak sedangkan ketika kita gunakan di luar fungsi maka tidak dikenali.
