// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

const inputArrayAsc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Tukar jika elemen yang ditemukan lebih besar dari elemen berikutnya
      if (arr[j] > arr[j + 1]) {
        // Tukar elemennya
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Ascending", arr);
};

const inputArrayDesc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Tukar jika elemen yang ditemukan lebih kecil dari elemen berikutnya
      if (arr[j] < arr[j + 1]) {
        // Tukar elemennya
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Descending", arr);
};

inputArrayAsc([5, 2, 9, 1, 5, 6]);
inputArrayDesc([5, 2, 9, 1, 5, 6]);
