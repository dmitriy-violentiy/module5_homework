let number = +prompt("Введите значение");
if (isNaN(number)) {
   console.log("Упс, кажется, вы ошиблись");
}
else if (typeof number == 'number') {
   if (number % 2 == 0) {
      console.log("Четное число");
   } else {
      console.log("Не четное число");
   }
}