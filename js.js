document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();

  const brojevi = document.querySelectorAll("input[type='number']");

  let kombinacije = [];
  let loto = [];
  let ispis = ``;
  let ispisPoklapanja = ``;

  for (let broj of brojevi) {
    kombinacije.push(Number(broj.value));
  }

  console.log(kombinacije.sort((a, b) => a - b));

  const interval = setInterval(() => {
    if (loto.length === 7) {
      clearInterval(interval);
      return;
    }

    let loptica = Math.floor(Math.random() * 39) + 1;

    if (!loto.includes(loptica)) {
      loto.push(loptica);

      ispis += `<img src="img/${loptica}.png" alt="Loptica ${loptica}" />`;
      document.querySelector(".balls-display").innerHTML = ispis;
    }
  }, 500);

  console.log(loto);

  setTimeout(() => {
    let poklapanja = kombinacije.filter((broj) => loto.includes(broj));

    console.log(poklapanja);
    console.log(poklapanja.length);

    if (poklapanja.length == 0) {
      document.querySelector(".window-balls").innerHTML = "";
      document.querySelector(".window-title").innerHTML =
        "Ne postoje dobitne<br>kuglice";
      document.querySelector(".window").style.display = "flex";
    } else {
      for (let poklop of poklapanja) {
        ispisPoklapanja += `<img src="img/${poklop}.png" alt="Loptica ${poklop}" />`;
      }
      document.querySelector(".window-title").innerHTML = "Dobitne kuglice su:";
      document.querySelector(".window-balls").innerHTML = ispisPoklapanja;
      document.querySelector(".window").style.display = "flex";
    }
  }, 5000);
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".window").style.display = "none";
});
