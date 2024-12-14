// .some()

      // Verifica se há algum número primo
      function isPrime(value){
            for( let i = 2; i < value; i++){
                  if( value % i === 0 ){
                      return false;  
                  }
            }

            return value > 1;
      }

      const numbers = [ 6, 8, 3, 14, 42 ]

      console.log(numbers.some(isPrime));
      


      // Verifica por condição em valores/objetos

      const team = [
            {id: 1, name: "Topper Harley", pilot: true},
            {id: 2, name: "Ramada Thompson", pilot: true},
            {id: 3, name: "Pete Thompson", pilot: false},
            {id: 4, name: "Kowalski", pilot: false}
      ]

      console.log(team.some(person => person.pilot));