const input = require('readline-sync');

const bilangan = input.questionInt("Masukan bilangan: ");

var mod = bilangan %2
if( mod == 0 ){
    console.log(bilangan +" Adalah bilangan genap");
} else {
    console.log(bilangan +" Adalah bilangan ganjil")
}
