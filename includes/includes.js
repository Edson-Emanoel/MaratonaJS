// .includes()

      const people = [
            { id: 1, name: "Adamastor", age: 23, group: "editor" },
            { id: 2, name: "Joana",     age: 28, group: "user"   },
            { id: 3, name: "Mauricio",  age: 34, group: "editor" },
            { id: 4, name: "Lalau",     age: 74, group: "admin"  }
      ]

      const filteredUsers = people.filter(p => p.name.includes("a"))

      console.log(filteredUsers);