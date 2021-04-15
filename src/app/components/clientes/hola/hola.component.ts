import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.scss']
})
export class HolaComponent implements OnInit {

  nombre: any = [ 'Steven XL', 'Steven XVI','David IX','Mary XV', 'Masy XIII', 'Mary XX']
  

  constructor() { }

  ngOnInit() {
    //this.prueba()
    //this.prueba2(15);

    //this.sortRoman(this.nombre)
    //this.toRoman("XVII")
    this.prueba3();
  }

  prueba2(n: any){
    for(let i = 1; i< n+1; i++){
      let tmp = i % 3
      let tmp2 = i % 5
      if (tmp == 0 && tmp2 == 0)
      console.log("FizzBuzz")
      else if(tmp == 0)
        console.log ("Fizz")
      else if(tmp2 == 0)
        console.log ("Buzz")
      else
        console.log(i)
    }
    
    
  }

  prueba3(){
    const user = {name: 'username', age: '99'}
    console.log('nombre: '+user.name + ' edad: '+user.age)
  }
  
  prueba() {
    var myArray = [1,2,1,3,3,1,2,1,5,1]
    var indices = new Array(8); 
    var str = "*"
    indices.fill(0);

    for (var i = 0; i < indices.length; i++) {

      for (var j = 0; j < myArray.length; j++) {
        if (i == myArray[j]) {
          indices[i] = indices[i] + 1;
        }
      }
    }
    for (var i = 1; i < indices.length; i++) {
      if (i<6)
      console.log(i+": "+str.repeat(indices[i]));
    }
    
  }

  sortRoman(names){
    let tmp = names;
    console.log(tmp.length)
    let nombres = [tmp.length];
    let json = {nombre: "", letra: "", valor: 0}
    for (var i = 0; i < tmp.length; i++){
      console.log(tmp[i])
      //json.nombre = tmp[i]
      //json.letra = tmp[i].slice(-2);
      //json.valor = this.toRoman(tmp[i].slice(-2))
      //console.log(json)
      nombres[i]={nombre: tmp[i].slice(0,-3).trim(), letra: tmp[i].slice(-3).trim(), valor: this.toRoman(tmp[i].slice(-3).trim())}
      
    }
    //nombres.sort()
    nombres.sort((a, b) => a.nombre - b.nombre)
    console.log(nombres)
    
  }

  toRoman(numero){
    let roman = numero;
    const numeral = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let total = 0;
    let current, last = 0;
    roman.split("").reverse().forEach(e => {
      current = numeral[e];
      if (current >= last) 
      total += current;
      else 
      total -= current;
      
      last = current;
    });
    console.log(total)
  return total;
  }

  /*sortByRomanNumerals(array) {
    const romanNumeralsOrderForReplace = [
        'xl',
        'l',
        'xxx',
        'xx',
        'ix',
        'x',
        'iv',
        'v',
        'iii',
        'ii',
        'i',
    ];
    const romanNumeralsMap = {
        i: 1,
        ii: 2,
        iii: 3,
        iv: 4,
        v: 5,
        ix: 9,
        x: 10,
        xx: 20,
        xxx: 30,
        xl: 40,
        l: 50,
    };
    const arr = array.map((a) => {
        const [name, number] = a.split(' ');
        const obj = {
            fullName: a,
            name,
            romanNumber: number,
        };
        let tempNumber = number.toLowerCase();
        romanNumeralsOrderForReplace.forEach((num) => {
            tempNumber = tempNumber.replace(num, `${romanNumeralsMap[num]},`);
        });
        const tempNumberArray = tempNumber.split(',');
        const newNumber = tempNumberArray.reduce((s, c) => {
            return s + (parseInt(c) ? parseInt(c) : 0);
        }, 0)
        obj.number = newNumber;
        return obj;
    }).sort((a, b) => a.number - b.number);
    
    return arr.map((obj) => obj.fullName);
}*/


}
