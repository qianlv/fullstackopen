const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}


let artoArrow = {
  name: 'Arto Hellas',
  greet: () => {
    console.log('hello, my name is ' + this.name)
  },
}

// const t1 = arto.greet;
// t1()
// const t2 = artoArrow.greet;
// t2()
artoArrow.greet()
// arto.greet()
