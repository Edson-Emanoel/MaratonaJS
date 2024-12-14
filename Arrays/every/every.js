// .every()

      // Verifica se todos os elementos de um array são maiores que 10
      const numbers = [12, 5, 8, 130, 44]

      const allAbove10 = numbers.every(elem => elem > 10)

      console.log(allAbove10);
      


      // Verifica se todos têm mais de 18 anos ou têm 18 anos
      const turma = [
            {id: 12, name: "Frederico", age: 8},
            {id: 47, name: "Francisa",  age: 9},
            {id: 77, name: "Ramon",     age: 48},
            {id: 85, name: "Zenon", age: 52},
      ]

      console.log( turma.every(p => p.age >= 18) )