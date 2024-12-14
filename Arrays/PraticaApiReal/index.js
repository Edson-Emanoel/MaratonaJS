// Uso de alguns recurso que Usamos e aplicaremos em uma api

async function getPeople() {
      const response = await fetch("https://randomuser.me/api/?results=10")

      return response.json();
}

// getPeople().then(data => console.log(data.results))

      // Somente mulheres

      getPeople().then(data => {
            const people = data.results

            console.log(people.filter(p => p.gender === 'female'));
      })

      // Trabalhando com dados
      getPeople().then(data => {
           const result = data.results.filter(p => p.dob.age >= 30)
           const people = []

           for (let p of result) {
                  people.push({
                        "Nome" : `${p.name.first} ${p.name.last}`,
                        "Sexo" : p.gender,
                        "Idade" : p.dob.age
                  })
           }

           console.log(people);
      })