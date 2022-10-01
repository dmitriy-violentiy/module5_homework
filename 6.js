let arr = [8, "da", 45, 88, 99];

x = typeof(arr[0]);
console.log(arr.every(element => typeof(element) == x));