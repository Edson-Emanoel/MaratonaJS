// .filter()

      // Filtrando números só uma vez
      const numbers = [ 2, 3, 4, 5, 4, 12, 19, 7, 2, 5 ]

      const uniqueArray = numbers.filter((elem, index, arr) => arr.indexOf(elem) === index)

      console.log(uniqueArray);