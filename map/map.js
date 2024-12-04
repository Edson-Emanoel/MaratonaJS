// .map()

      // ///////////// Dobra Valores
      const number = [1, 4, 5, 9, 14, 23]

      const doubledNumbers = number.map(num => num * 4)

      console.log(doubledNumbers);



      // ///////////// Fahrenheit para Celsius
      const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

      const celsius = fahrenheit.map(( elem ) => (Math.round((elem - 32) * 5/9)) )

      console.log(celsius);