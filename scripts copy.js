fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("success", response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errore nella chiamata");
    }
  })
  .then((users) => {
    console.log("USERS", users);
    const ul = document.getElementById("users-list");
    users.forEach((u) => {
      const newLi = document.createElement("li");
      newLi.innerText = u.name + " - " + u.email;
      ul.appendChild(newLi);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

// new
const newUser = {
  address: {
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "McKenziehaven",
    zipcode: "59590-4157",
  },
  company: {
    name: "Romaguera-Jacobson",
    catchPhrase: "Face to face bifurcated interface",
    bs: "e-enable strategic applications",
  },
  email: "Nathan@yesenia.net",
  id: 3,
  name: "Clementine Bauch",
  phone: "1-463-123-4447",
  username: "NewUser",
  website: "ramiro.info",
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(newUser),
  headers: {
    "Content-type": "application/json",
    // "Autorization":
  },
})
  .then((resp) => {
    if (resp.ok) {
      console.log("salvato!");
    } else {
      throw new Error("Errore nel savataggio");
    }
  })
  .catch((err) => {
    console.log(err);
  });
