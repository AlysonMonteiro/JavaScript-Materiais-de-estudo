const data = new Date("2022-03-02 00:00:00");
let diaSemana = data.getDay();
const diaSemanaText = getDayWeek(diaSemana);

function getDayWeek(diaSemana) {
  let diaSemanaText;

  switch (diaSemana) {
    case 0:
      diaSemanaText = "Domingo";
      return diaSemanaText;
    case 1:
      diaSemanaText = "Segunda";
      return diaSemanaText;
    case 2:
      diaSemanaText = "Terça";
      return diaSemanaText;
    case 3:
      diaSemanaText = "Quarta";
      return diaSemanaText;
    case 4:
      diaSemanaText = "Quinta";
      return diaSemanaText;
    case 5:
      diaSemanaText = "Sexta";
      return diaSemanaText;
    case 6:
      diaSemanaText = "Sabado";
      return diaSemanaText;
    default:
      diaSemanaText: "";
      return diaSemanaText;
  }
}

console.log(diaSemana, diaSemanaText);
