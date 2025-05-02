/**-- PROYECTO 1: PIEDAD-PAPEL-TIJERA--*/ console.log(
    "--PROYECTO 1: PIEDAD-PAPEL-TIJERA--"
);

function CpuChoise() {
  let aleatorio = Math.floor(Math.random() * 3) + 1;

  switch (aleatorio) {
    case 1:
      return "Piedra";
      break;

    case 2:
      return "Papel";
      break;

    case 3:
      return "Tijera";
      break;
  }
}

function HumanChoise() {
  let desicion1 = parseInt(
    prompt(" Elije sabiamente: \n 1. Piedra \n 2. Papel \n 3. Tijera")
  );
  switch (desicion1) {
    case 1:
      return "Piedra";
      break;

    case 2:
      return "Papel";
      break;

    case 3:
      return "Tijera";
      break;
  }
}

let CpuScore = 0;
let HumanScore = 0;

function PlayRound() {
  let cpu = CpuChoise();
  let human = HumanChoise();

  //Piedra
  if (human == "Piedra" && cpu == "Piedra") {
    return alert(
      "EMPATE!! \n La CPU tambien escogio piedra... \n Fue un combate " +
        human +
        " vs " +
        cpu
    );
  } else if (human == "Piedra" && cpu == "Papel") {
    CpuScore++;
    return alert(
      "PERDISTE!! \n La CPU escogio papel... \n Fue un combate " +
        human +
        " vs " +
        cpu
    );
  } else if (human == "Piedra" && cpu == "Tijera") {
    HumanScore++;
    return alert(
      "GANASTEE!! \n La CPU escogio tijera... \n Fue un combate " +
        human +
        " vs " +
        cpu
    );
  }

  //Papel
  else if (human == "Papel" && cpu == "Papel") {
    return (
      "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate " +
      human +
      " vs " +
      cpu
    );
  } else if (human == "Papel" && cpu == "Tijera") {
    CpuScore++;
    return (
      "PERDISTE!! \n La CPU escogio tijera... \n Fue un combate " +
      human +
      " vs " +
      cpu
    );
  } else if (human == "Papel" && cpu == "Piedra") {
    HumanScore++;
    return (
      "GANASTEE!! \n La CPU escogio Piedra... \n Fue un combate " +
      human +
      " vs " +
      cpu
    );
  }

  //Tijera
  else if (human == "Tijera" && cpu == "Tijera") {
    return (
      "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate " +
      human +
      " vs " +
      cpu
    );
  } else if (human == "Tijera" && cpu == "Piedra") {
    CpuScore++;
    return (
      "PERDISTE!! \n La CPU escogio piedra... \n Fue un combate " +
      human +
      " vs " +
      cpu
    );
  } else if (human == "Tijera" && cpu == "Papel") {
    HumanScore++;
    return (
      "GANASTEE!! \n La CPU escogio papel... \n Fue un combate " +
      human +
      " vs " +
      cpu
    );
  }
}

function PlayGame() {
  alert(
    "Jugaras Piedra-Papel-Tijeras \n El juego tiene en total 5 RONDAS \n PREPARATEE!!"
  );
  let contador = 0;

  while (contador < 5) {
    let ronda = PlayRound();
    console.log(ronda);
    contador++;
  }
  console.log(
    "Esta es TÚ puntuacion de las veces que ganaste: " +
      HumanScore +
      " \n Esta es la puntuación de la CPU de las veces que te ganó: " +
      CpuScore
  );
}

let jugada = PlayGame();
console.log(jugada);