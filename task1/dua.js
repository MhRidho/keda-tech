// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

const inputArray = (arr) => {
    const resultKecilBesar = [...arr].sort((a, b) => a - b);
    const resultBesarKecil = [...arr].sort((a, b) => a + b);

    console.log('Urut Kecil Besar => ' + resultKecilBesar);
    console.log('Urut Besar Kecil => ' + resultBesarKecil);
}

inputArray([4, 2, 3])