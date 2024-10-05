let day = "";

switch (new Date().getDay()) {
  case 0:
    day = "Воскресенье";
    break;
  case 1:
    day = "пн";
    break;
  case 2:
    day = "Вт";
    break;
  case 3:
    day = "ср";
    break;
  case 4:
    day = "чт";
    break;
  case 5:
    day = "пт";
    break;
  case 6:
    day = "сб";
  default:
    "неизвестный";
}
console.log("Сегрдня " + day.toLowerCase() + ".");
