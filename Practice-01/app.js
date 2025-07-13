//how  to save in local storage
localStorage.setItem("name", "Aman");

//how to fetched in local storage;
localStorage.getItem("name");

//how remove in local storage;
localStorage.removeItem("name");

//how to store array in local storage;

localStorage.setItem("friends", JSON.stringify(["manan", "rahul", "suresh"]));

JSON.parse(localStorage.getItem("friends"))


