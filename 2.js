let x = 1;
if (typeof x == 'number') {
   console.log("Число");
} 
else if (typeof x == 'string') {
   console.log("Строка");
} 
else if (typeof x == 'boolean') {
   console.log("Логический тип");
} else {
   console.log("Тип x не определен");
}