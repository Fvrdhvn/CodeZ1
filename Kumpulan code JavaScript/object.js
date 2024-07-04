// // Pengertian Object
// // Object pada bahasa pemroraman merupakan "abstraksi" dari benda yang ada di dunia nyata. Object dapat digunakan untuk menyimpan data.

// // Pada JavaScript, object terdiri dari name dan value(variable) atau method(fungsi).

// // Name dan value disebut sebagai property.

// Kita bisa menganalogikan suatu object mobil mempunyai beberapa name antara lain nama mobil, berat, warna dan tipe.

// Masing-masing name tersebut mempunyai value misalnya nama mobil memiliki value Toyota, berat memiliki value 600kg, warna memiliki value putih, tipe memiliki value Agya. Nah name dan value tersebut disebut sebagai property.
// Selain dapat menyimpan property, kita juga bisa menyimpan method atau fungsi, misalnya sebuah mobil bisa mempunyai fungsi maju, mundur dan sebagainya.

// Berdasarkan analogi di atas, kita bisa menginisialisasi property sebagai berikut ini.

var televisi = {
  nama: "QLED",
  resolusi: "3840 x 2160",
  screen: "55",
  Design: "Brand new frame",
  weight: "27.2 kg",
  menyala: function () {
    return "mulai menyala abangkuhh";
  },
  mematikan: function () {
    return "mulai mati";
  },
  Mengganti: function () {
    return "berganti channel";
  },
  menaikkanvol: function () {
    return "menaikkan volume";
  },
  menurunkanvol: function () {
    return "menurunkan volume";
  },
  membisukan: function () {
    return "membisukan suara";
  },
};

document.getElementById("data").innerHTML =
  televisi.nama + " " + televisi.menyala();
