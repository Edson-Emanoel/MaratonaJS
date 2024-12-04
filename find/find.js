// .find()

      // Pizzas
      const pizzas = [
            "Calabresa",
            "Mussarela",
            "Marguerita",
            "Portuguesa",
            "Frango com Catupiry"
      ]

      const foundPizza = pizzas.find(p => p.startsWith("M"))

      console.log(foundPizza);



      // Frutas

      const fruits = [
            { name: "jaca",   quantity: 2 },
            { name: "banana", quantity: 0 },
            { name: "cereja", quantity: 5 },
      ]

      const foundFruit = fruits.find(fruit => fruit.name === "cereja")

      console.log(foundFruit);