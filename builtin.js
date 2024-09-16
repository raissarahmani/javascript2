
let kalimat = "SayaSukaJavascript";
// .toLowerCase () = semua huruf menjadi huruf kecil
const contoh1 = kalimat.toLowerCase();
console.log(contoh1);

// .toUpperCase () = semua huruf menjadi huruf kapital
const contoh2 = kalimat.toUpperCase();

// .length = panjang string 
const contoh3 = kalimat.length;

// .toString() = menjadi string
const contoh4 = kalimat.toString();

// .split(``) = elemen dalam string menjadi string baru
const contoh5 = kalimat.split(``);


let array = [2,8,5,4,0,3,1];
// .reverse() = mengubah urutan elemen array
const contoh6 = array.reverse();

// .slice (0,batas) = memotong bagian string/array menjadi string/array baru sampai batas yang ditentukan
const contoh7 = array.slice(0,5);

// .sort ((a,b) => ascending/descending) = mengurutkan elemen dalam array
const contoh8 = array.sort((a,b) => b-a);

// .filter (x=> filter) = filter array menjadi array baru
const contoh9 = array.filter(x=> x>1)

// .forEach (x=> command) = memberi command untuk setiap elemen dalam array
const contoh10 = array.forEach(x=> console.log(x));




