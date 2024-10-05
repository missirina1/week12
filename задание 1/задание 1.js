const formBtn = document.getElementById("formBtn");
formBtn.addEventListener("click", countDay);

function countDay() {
  const formInput = document.getElementById("formInput");
  const paragraph = document.getElementById("paragraph");

  //   получаем дату, которую ввел user
  const getUserDate = new Date(formInput.value);
  const myBirthday = new Date(2025, 3, 7);

  //   Рассчитаем разницу в днях
  const diffInMilliseconds = myBirthday - getUserDate;
  const daysLeft = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  //   проверяем поле на пустоту
  if (!formInput.value) {
    paragraph.style.color = "red";
    paragraph.textContent = "Введите дату";
  } else {
    paragraph.style.color = "black";
    paragraph.textContent = `До дня рождения осталось ${daysLeft} ${correctWord(
      daysLeft
    )}`;

    // Меняем слово день
    function correctWord(days) {
      if (days % 10 === 1 && days % 100 !== 11) {
        return "день";
      } else if (
        days % 10 >= 2 &&
        days % 10 <= 4 &&
        !(days % 100 >= 12 && days % 100 <= 14)
      ) {
        return "дня";
      } else {
        return "дней";
      }
    }
  }
}
