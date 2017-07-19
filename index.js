var inputAngka = process.argv[2];
var angka = Number(inputAngka);
var integer = Number.isInteger(angka);
var batas = Math.floor(Math.sqrt(angka));
var count = 0;
var pembagi = [];
function check(angka) {
  if (integer == true) {
    if (angka > 1) {
      for (i = 2; i <= batas; i++) {
        if (angka % i === 0) {
          count++;
          pembagi.push(i);
        } else {}
      }
      if (count === 0) {
        //output bilangan prima
        console.log('Selamat!! Angka ' + angka + ' adalah bilangan prima!\nWhoop Whoop!!');
      } else if (count > 0) {
        //output bukan bilangan prima
        console.log('Angka ' + angka + ' bukan bilangan prima');
        console.log('Karena ' + angka + ' habis dibagi ' + pembagi);
      }
    } else {
      console.log('Hmm sepertinya data yang kamu masukkan bukan bilangan yang lebih besar dari 1');
    }

  } else if (integer == false) {
    console.log('Hmm sepertinya data yang kamu masukkan bukan bilangan asli, silahkan refresh halaman ini dan coba lagi.');
  }
}
check(angka);
